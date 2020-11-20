import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts";

const app = new Application()

const router = new Router();

router.get("/artemis", (ctx) => {
    ctx.response.body = "router has been created"

    const artemisQuery = (url: string, query: any) => {
    const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)
    }
        fetch(url, opts)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error);
}

const url = "https://snowtooth.moonhighway.com/"

  const query = `
      query {
        Lift(id: "panorama") {
          name
          status
        }
      }
    `
    artemisQuery(url, query)
})

app.use(router.routes(), router.allowedMethods())

const port = 8080
console.log(`Server started on port ${port}`)
await app.listen({port})

