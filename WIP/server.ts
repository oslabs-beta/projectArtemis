import { Application, Router } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

const router = new Router();
app.use(oakCors());

router.get("/artemis", (ctx) => {
  console.log("you have entered the router");
});

app.use(oakCors());

app.use(router.routes(), router.allowedMethods());

app.use(
  oakCors({
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
);

app.use(async (ctx, next) => {
  await ctx.send({
    root: `${Deno.cwd()}/dist`,
    index: "index.html",
  });
  next();
});

const port = 4020;
console.log(`Server started on port ${port}`);
await app.listen({ port });
