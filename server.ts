import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { types, resolvers } from "./schema.ts"

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


// const fileExists = async (path: string): Promise<boolean> => {
//     try {

//     }
// }

router.get("/artemis", async (ctx) => {
    ctx.response.body = "router has been created"
    const readArtemisCache = (path: string): string => {
        try {
            const data = Deno.readTextFileSync(path)
            if (!data) {
                overwriteArtemisCache(path, [])
            }
            ctx.state = { artemis: JSON.parse(data) }
            return ctx.state.artemis
        }
        catch (error) {
            return error.message
        }
    }

    const overwriteArtemisCache = (path: string, data: object): string => {
        try {
            Deno.writeTextFileSync(path, JSON.stringify(data));
            return "Written to " + path;
        }
        catch (e) {
            return e.message;
        }
    }

    const addDataSnapshot = (path: string, data: object): string => {
        try {
            ctx.state.artemis.push(data)
            overwriteArtemisCache(path, ctx.state.artemis)
            return `${data}`
        }
        catch (error) {
            return error.message
        }
    }

    readArtemisCache("./artemisCache.json")
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

