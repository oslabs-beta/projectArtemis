import { Application } from "https://deno.land/x/oak/mod.ts";
import { ObsidianRouter } from 'https://deno.land/x/obsidian/mod.ts'

const app = new Application();

app.use((ctx) => {
    ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });