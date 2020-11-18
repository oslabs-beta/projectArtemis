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
router.get("/", async (ctx) => {
    ctx.response.body = "router has been created"
  

      function writeJson(path: string, data: object): string {
        try {
    Deno.writeTextFileSync(path, JSON.stringify(data));
    return "Written to " + path;
  } catch (e) {
    return e.message;
  }
    }
    console.log(writeJson("./artemisCache.json", [{ hello: "World" }]));

    const read = Deno.readTextFileSync("./artemisCache.json")
    ctx.state = { artemis: JSON.parse(read) }
    console.log("state ", ctx.state)
    
    const appendJson = (path: string, data: object): string => {
        ctx.state.artemis.push(data)
        console.log("updated state ", ctx.state.artemis)
        writeJson("./artemisCache.json", ctx.state.artemis)
        return "State updated"
}
appendJson("./artemisCache.json", {newTest: "newString"})
  

})

app.use(router.routes())
app.use(router.allowedMethods())


app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

