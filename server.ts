import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import artemisQuery from "./artemis.ts";
import syncCacheAndState from "./sync.ts"
import addDataSnapshot from "./snapshot.ts"
import clearSnapshots from "./clear.ts";

const app = new Application()

const router = new Router();

router.get("/artemis", (ctx) => {
ctx.response.body = "router has been created"

  const url = "https://api.spacex.land/graphql"
    const query = ` query {
      launch(id: "1") {
        mission_name
        launch_success
        upcoming
        launch_year
        }
      }`
    
  artemisQuery(url, query, ctx.state)
})

app.use(router.routes(), router.allowedMethods())

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

