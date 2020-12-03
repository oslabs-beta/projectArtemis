import {
  Application,
  Router,
  RouterContext,
  send,
} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import artemisQuery from "./functions/artemisQuery.ts";
import syncCacheAndState from "./functions/syncCacheAndState.ts";
import addDataSnapshot from "./functions/addDataSnapshot.ts";
import clearSnapshots from "./functions/clearSnapshots.ts";
import { createSecAccept } from "https://deno.land/std@0.69.0/ws/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {applyArtemis} from "./applyArtemis.ts"

const app = new Application();

const router = new Router();
app.use(oakCors())

// router.get("/artemis", (ctx) => {
//   ctx.response.body = "Query has been sent";
//   console.log("you have entered the router");
//   let counter = 3;
//   while (counter > 0) {
//     const url = "https://api.spacex.land/graphql";
//     let id = 10;
//     const query = ` query {
//       launch(id: "${id}") {
//         mission_name
//         launch_success
//         ffdso
//         upcoming
//         launch_year
//         }
//       }`;
//     counter--;
//     id++;

//     artemisQuery(url, query, ctx.state);
//     ctx.response.body = ctx.state
//   }
// });


// router.get("/getData", (ctx, state:any) => {
//   console.log("in getData route")
//   ctx.response.body = state.artemis
// })

// app.use(router.routes(), router.allowedMethods());

// app.use(
//   oakCors({
//     origin:  "http://localhost:8080",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }),
// );



//testing applyArtemisfunc
const ArtemisService = await applyArtemis <Router>({
  Router,
  useGui: true
})
app.use(ArtemisService.routes());
console.log('testing artemis route server')

app.use(async (ctx, next) => {
  // console.log(Deno.cwd());
  await ctx.send({
    root: `${Deno.cwd()}/dist`
    // index: "index.html",
  });
  next();
});
import {exists} from 'https://deno.land/std@0.59.0/fs/exists.ts';

const staticFilePath = './dist'

const ensureLocalFile = async (localPath: string): Promise<void> => {
  const fileExists = await exists(localPath);
  if (fileExists) return;
  console.log(`${localPath}`);
  // const response = await fetch(url);
  // if (!response.ok) throw new Error('Response not OK');
  const r = response.body?.getReader;
  const buf = new Uint8Array(await response.arrayBuffer());
  await Deno.writeFile(staticFilePath, buf);
  console.log('File saved');
};

await ensureLocalFile(staticFilePath)



const port = 4016;
console.log(`Server started on port ${port}`);
await app.listen({ port });



