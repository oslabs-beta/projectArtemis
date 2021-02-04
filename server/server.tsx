// import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
// import { ObsidianRouter, gql } from 'https://deno.land/x/obsidian/mod.ts';

// const PORT = 8000;

// const app = new Application();

// const types = (gql as any)`
//   // Type definitions
// `;

// const resolvers = {
//     // Resolvers
// }

// interface ObsRouter extends Router {
//     obsidianSchema?: any;
// }

// const GraphQLRouter = await ObsidianRouter<ObsRouter>({
//     Router,
//     typeDefs: types,
//     resolvers: resolvers,
//     redisPort: 6379,
// });

// const router = new Router();
// router.get('/', handlePage);

// function handlePage(ctx: any) {
//     try {
//         const body = (ReactDomServer as any).renderToString(<App />);
//         ctx.response.body = `<!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <title>SSR React App</title>
//       </head>
//       <body>
//         <div id="root">\${body}</div>
//         <script src="/static/client.tsx" defer></script>
//       </body>
//       </html>`;
//     } catch (error) {
//         console.error(error);

//         app.use(GraphQLRouter.routes(), GraphQLRouter.allowedMethods());

//         await app.listen({ port: PORT });