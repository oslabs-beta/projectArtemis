import {renderGuiPage} from './render-gui-html.ts'

interface Constructable<T> {
    new (...args: any): T & OakRouter;
  }

interface OakRouter {
    post: any;
    get: any;
    use: any;
  }

export interface ApplyArtemisOptions<T> {
    Router: Constructable<T>
    path?: string
    context?: (ctx: any) => any
    useGui?: boolean
}

export async function applyArtemis<T>({
    Router,
    path = "/artemis",
    context,
    useGui = true,
  }: ApplyArtemisOptions<T>): Promise<T> {
    const router = new Router();

    await router.post(path, async (ctx: any) => {
        const { response, request } = ctx;
        if (request.hasBody) {
          try {
            const contextResult = context ? await context(ctx) : undefined;
            const body = ctx.params.operations || await request.body().value;
            response.status = 200;
            return;
          } catch (error) {
            response.status = 200;
            response.body = {
              data: null,
              errors: [
                {
                  message: error.message ? error.message : error,
                },
              ],
            };
            return;
          }
        }
      });


      await router.get(path, async (ctx: any) => {
        console.log('inside the applyArtemis get router')
        // console.log(ctx)
        const { request, response } = ctx;
        if (useGui) {
          const prefersHTML = request.accepts("text/html");
          // console.log('in first conditional')
          if (prefersHTML) {
            // console.log('in second conditional')
            const gui = renderGuiPage({
              endpoint: request.url.origin + path,
            });
            response.status = 200;
            response.body = gui;
            return
          }
        }
      })

      router.use(path, async (ctx:any) => {
        console.log('inside the applyArtemis static function')
        // console.log(Deno.cwd());
        await ctx.send({
          root: `${Deno.cwd()}/dist`,
          // index: "index.html",
        });
      })


      return router;
  }