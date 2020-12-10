// export interface RenderPageOptions{
//     endpoint?: string
//     env?: any
//     config?: any
//     title?: string
//     faviconUrl?: string | null
//   }

//   export function renderGuiPage(options: RenderPageOptions) {
//   //   console.log("options:", options)
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charSet="utf-8" />
//     <style type="text/css" data-module-id="/style/index.css">
//         *,
//         ::after,
//         ::before {
//             box-sizing: border-box;
//             --primary-color: rgba(22, 22, 26, 0.95);
//             --secondary-color: rgb(114, 117, 126);
//             --tertiary-color: rgb(127, 90, 240);
//             --quaternary-color: rgba(240, 248, 255);
//             --dark-neumorphism: rgba(22, 22, 26, .9);
//             --light-neumorphism: rgba(240, 248, 255, 0.15);
//             --primary--text-color: rgb(127, 90, 240);
//             --secondary-text-color: rgb(128, 128, 128)
//         }

//         body {
//             height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             overflow-y: hidden;
//             background-color: var(--primary-color)
//         }

//         .container-gui {
//             padding: 2.5%;
//             border-radius: 25px;
//             display: flex;
//             justify-content: space-around;
//             min-width: 90vw;
//             border: 1px solid rgba(0, 0, 0, .1);
//             box-shadow: 8px 8px 16.2px 1px var(--dark-neumorphism), -3px -3px 9px 1px var(--light-neumorphism)
//         }
//     </style>
//     <style type="text/css" data-module-id="/style/analyticsContainer.css">
//         .container-tab {
//             padding-bottom: 0;
//             background-color: var(--tertiary-color);
//             border-top-left-radius: 10px;
//             border-top-right-radius: 10px;
//             border: 1px solid rgba(0, 0, 0, .1);
//             background-color: rgba(0, 0, 0, 0);
//             box-shadow: 4px 4px 10px .5px var(--dark-neumorphism), -1.5px -1.5px 4px .5px var(--light-neumorphism);
//             display: flex;
//             justify-content: space-between
//         }

//         .container-analytics {
//             border-bottom-left-radius: 25px;
//             border-bottom-right-radius: 25px;
//             border: 1px solid rgba(0, 0, 0, .1);
//             background-color: rgba(0, 0, 0, 0);
//             box-shadow: inset 4px 4px 10px .7px var(--dark-neumorphism), inset -1.5px -1.5px 4px .7px var(--light-neumorphism)
//         }
//     </style>
//     <style type="text/css" data-module-id="/style/tabs.css">
//         .tab {
//             padding: .5%;
//             background-color: rgba(0, 0, 0, 0);
//             color: rgba(128, 128, 128);
//             border-top-color: transparent;
//             border-bottom-color: transparent;
//             border-left-color: transparent;
//             flex-grow: 1;
//             transition: .5s ease;
//             font-weight: 700;
//             font-size: .95rem
//         }

//         .tab:focus {
//             outline: 0
//         }

//         .tab:focus,
//         .tab:hover {
//             cursor: pointer;
//             border-bottom-color: var(--tertiary-color);
//             color: var(--primary--text-color)
//         }

//         .hidden-view-buttons {
//             position: absolute;
//             display: none
//         }
//     </style>
//     <style type="text/css" data-module-id="/style/graphs.css">
//         .graph {
//             position: relative;
//             height: 65vh;
//             width: 72.5vw;
//             padding: 15px
//         }
//     </style>
//     <style type="text/css" data-module-id="/style/sidebar.css">
//         .flex-menubar {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             border-radius: 25px;
//             padding: 2.5%;
//             max-width: 1%
//         }

//         .container-sidebar {
//             justify-content: space-between
//         }

//         .menubar-items_social-icons {
//             display: flex;
//             flex-direction: column;
//             gap: 15px
//         }

//         .menubar-items_list-links {
//             margin-top: -100%;
//             text-align: center
//         }

//         .wrapper_navLinks {
//             font-size: 1.7rem;
//             margin-top: 13%
//         }

//         a:link {
//             text-decoration: none
//         }

//         a {
//             color: var(--secondary-text-color);
//             transition: .28s ease-in-out
//         }

//         a:focus {
//             outline: 0
//         }

//         a:focus,
//         a:hover {
//             color: var(--tertiary-color);
//             text-decoration: underline
//         }

//         .queries_list_item {
//             text-transform: uppercase;
//             font-size: 1.1rem;
//             color: var(--secondary-text-color);
//             font-weight: 5250;
//             font-family: Arial;
//             text-shadow: 2px 2px 3px var(--dark-neumorphism), -2px -2px 3px var(--light-neumorphism);
//             transition: .2s ease-in-out
//         }

//         .queries_list_item:hover {
//             color: var(--tertiary-color);
//             text-shadow: 2px 2px 3px var(--dark-neumorphism), -2px -2px 3px var(--light-neumorphism)
//         }

//         .social-icon:hover {
//             cursor: pointer;
//             filter: drop-shadow(-4px -4px 2px var(--light-neumorphism)) drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(0)
//         }

//         .social-icon:active {
//             transform: translateY(3px);
//             filter: drop-shadow(-2px -2px .5px var(--light-neumorphism)) drop-shadow(2px 2px .5px var(--dark-neumorphism))
//         }

//         .social-icon {
//             transition: .1s ease-out;
//             filter: drop-shadow(-4px -4px 2px var(--light-neumorphism)) drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(1)
//         }
//     </style>
//     <link rel="modulepreload" href="/_aleph/main.877e905a2.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/aleph.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/context.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/error.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/events.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/routing.js" />
//     <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/util.js" />
// </head>

// <body>
//     <main>
//         <div class="container-gui">
//             <div class="flex-menubar container-sidebar">
//                 <div><img src="/hamburger.svg" /></div>
//                 <div class="menubar-items_list-links">
//                     <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Home</a></div>
//                     <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Docs</a></div>
//                     <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Help</a></div>
//                 </div>
//                 <div class="menubar-items_social-icons">
//                     <div class="social-icon"><img src="/github.svg" /></div>
//                     <div class="social-icon"><img src="/twitter.svg" /></div>
//                 </div>
//             </div>
//             <div class="container-main-view">
//                 <div class="container-tab"><button class="tab"
//                         style="border-right-color:rgba(0, 0, 0, 0);background-color:rgb(127, 90, 240);color:rgb(0, 0, 0);border-top-right-radius:10px;border-top-left-radius:10px">Latency</button><button
//                         class="tab" style="border-right-color:rgb(170, 170, 170)">Success Rate</button><button
//                         class="tab" style="border-right-color:rgb(170, 170, 170)">Data Size</button><button class="tab"
//                         style="border-right-color:rgba(0, 0, 0, 0)">APIs</button></div>
//                 <div class="container-analytics">
//                     <div class="graph"><canvas height="150" width="300"></canvas></div>
//                 </div><button id="increment" class="hidden-view-buttons"></button><button id="decrement"
//                     class="hidden-view-buttons"></button>
//             </div>
//         </div>
//     </main>
//     <script></script>
//     <script src="/_aleph/main.877e905a2.js" type="module"></script>
// </body>

// </html>
//     </body>

//     </html>
//     `
//   }