import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import artemisQuery from "./artemis.ts";
import syncCacheAndState from "./sync.ts"
import addDataSnapshot from "./snapshot.ts"

const app = new Application()

const router = new Router();

router.get("/artemis", (ctx) => {
    ctx.response.body = "router has been created"
// console.log("ctx.state: ", ctx.state)
  
//   const path = "./artemisCache.json"
//   const testObj = { test: "text" }
//   syncCacheAndState(ctx.state, path)
//   console.log("ctx.state: ", ctx.state)
  // addDataSnapshot(testObj, ctx.state, path)
  
 const url = "https://snowtooth.moonhighway.com"
 const query = `{
   Lift(id: "panorama") {
      name
      status
    }
  }`
    
    artemisQuery(url, query, ctx.state)
})

app.use(router.routes(), router.allowedMethods())

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

