import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";
import { types, resolvers } from "./schema.ts"
import artemisQuery from "./functions/artemis.ts"

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
    Router,
    typeDefs: types,
    resolvers,
    context: (ctx: RouterContext) => {
      return true;
    }
})

const router = new Router();
const path = "./artemisCache.json";

router.get("/artemis", (ctx) => {
    ctx.response.body = "router has been created"
    const readArtemisCache = (path: string): string => {
    /*
    Reads the artemisCache file for data and saves it to ctx.state as an object labeled Artemis.
    This should be called every time at the beginning of any any functionality to ensure the
    state and cache are aligned and no data is ever lost or overwritten.
    */
        if (!path) {
            path = "./artemisCache.json"
        }
        //Sets a default path if one is not passed as an argument
        try {
            const data = Deno.readTextFileSync(path)
            if (!data) {
                //If artemisCache is empty, adds an empty array to the file. This is necessary to
                //make sure addSnapshot etc. still functions properly.
                overwriteArtemisCache([], path)
            }
            ctx.state = { artemis: JSON.parse(data) }
            //Parses the data saved in artemisCache and saves it on ctx.state.
            return ctx.state.artemis
        }
        catch (err) {
            if (err instanceof Deno.errors.NotFound) {
                overwriteArtemisCache([], path)
                //In any instance that artemisCache doesn't exist (ie the first time a client uses
                //Artemis) an artemisCache json file is created with an empty array inside
                return "JSON file created"
            }
            return err.message
        }
    }
    const overwriteArtemisCache = (data: object, path: string): string => {
        if (!path) {
            path = "./artemisCache.json"
        }
        //Sets a default path if one is not passed as an argument
        try {
            Deno.writeTextFileSync(JSON.stringify(data), path);
            return "Written to " + path;
        }
        catch (error) {
            return error.message;
        }
    }

    const addDataSnapshot = (data: object, path: string): string => {
        if (!path) {
            path = "./artemisCache.json"
        }
        //Sets a default path if one is not passed as an argument
        try {
            ctx.state.artemis.push(data)
            overwriteArtemisCache(ctx.state.artemis, path)
            return `${data}`
        }
        catch (error) {
            return error.message
        }
    }
    readArtemisCache(path)

    const newArtemisQuery = (url: string, query: string) => {
        console.log(JSON.stringify({ query }))
    const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)
    }
        fetch(url, opts)
  .then(res => res.json())
  .catch(console.error);
}

//     const query = `
//   query {
//     Lift(id: "panorama") {
//       name
//       status
//     }
//   }
// `;
// const url = "https://snowtooth.moonhighway.com/";

const url = "https://api.spacexdata.com/v3/launches"

const query = `Query {getLaunches {flight_number,mission_name}}`
    // async function test() {
    //     const result = await artemisQuery(url, query)
    //     console.log(result)
    // }
    // test()

    newArtemisQuery(url, query)
})

app.use(router.routes(), router.allowedMethods())

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

