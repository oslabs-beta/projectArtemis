export interface RenderPageOptions{
  endpoint?: string
  env?: any
  config?: any
  title?: string
  faviconUrl?: string | null
}

export function renderGuiPage(options: RenderPageOptions) {
//   console.log("options:", options)
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charSet="utf-8" />
    <style type="text/css" data-module-id="/style/index.css">
        *,
        ::after,
        ::before {
            box-sizing: border-box;
            --primary-color: rgba(22, 22, 26, 0.95);
            --secondary-color: rgb(114, 117, 126);
            --tertiary-color: rgb(127, 90, 240);
            --quaternary-color: rgba(240, 248, 255);
            --dark-neumorphism: rgba(22, 22, 26, .9);
            --light-neumorphism: rgba(240, 248, 255, 0.15);
            --primary--text-color: rgb(127, 90, 240);
            --secondary-text-color: rgb(128, 128, 128)
        }

        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: hidden;
            background-color: var(--primary-color)
        }

        .container-gui {
            padding: 2.5%;
            border-radius: 25px;
            display: flex;
            justify-content: space-around;
            min-width: 90vw;
            border: 1px solid rgba(0, 0, 0, .1);
            box-shadow: 8px 8px 16.2px 1px var(--dark-neumorphism), -3px -3px 9px 1px var(--light-neumorphism)
        }
    </style>
    <style type="text/css" data-module-id="/style/main-view.css">
        .container-tab {
            padding-bottom: 0;
            background-color: var(--tertiary-color);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border: 1px solid rgba(0, 0, 0, .1);
            background-color: rgba(0, 0, 0, 0);
            box-shadow: 4px 4px 10px .5px var(--dark-neumorphism), -1.5px -1.5px 4px .5px var(--light-neumorphism);
            display: flex;
            justify-content: space-between
        }

        .container-analytics {
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            border: 1px solid rgba(0, 0, 0, .1);
            background-color: rgba(0, 0, 0, 0);
            box-shadow: inset 4px 4px 10px .7px var(--dark-neumorphism), inset -1.5px -1.5px 4px .7px var(--light-neumorphism)
        }
    </style>
    <style type="text/css" data-module-id="/style/tabs.css">
        .tab {
            padding: .5%;
            background-color: rgba(0, 0, 0, 0);
            color: rgba(128, 128, 128);
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            flex-grow: 1;
            transition: .5s ease;
            font-weight: 700;
            font-size: .95rem
        }

        .tab:focus {
            outline: 0
        }

        .tab:focus,
        .tab:hover {
            cursor: pointer;
            border-bottom-color: var(--tertiary-color);
            color: var(--primary--text-color)
        }

        .hidden-view-buttons {
            position: absolute;
            display: none
        }
    </style>
    <style type="text/css" data-module-id="/style/graphs.css">
        .query-speed-container {
            position: relative;
            height: 65vh;
            width: 72.5vw;
            padding: 15px
        }
    </style>
    <style type="text/css" data-module-id="/style/sidebar.css">
        .flex-menubar {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 25px;
            padding: 2.5%;
            max-width: 1%
        }

        .container-sidebar {
            justify-content: space-between
        }

        .menubar-items_social-icons {
            display: flex;
            flex-direction: column;
            gap: 15px
        }

        .menubar-items_list-links {
            margin-top: -100%;
            text-align: center
        }

        .wrapper_navLinks {
            font-size: 1.7rem;
            margin-top: 13%
        }

        a:link {
            text-decoration: none
        }

        a {
            color: var(--secondary-text-color);
            transition: .28s ease-in-out
        }

        a:focus {
            outline: 0
        }

        a:focus,
        a:hover {
            color: var(--tertiary-color);
            text-decoration: underline
        }

        .queries_list_item {
            text-transform: uppercase;
            font-size: 1.1rem;
            color: var(--secondary-text-color);
            font-weight: 5250;
            font-family: Arial;
            text-shadow: 2px 2px 3px var(--dark-neumorphism), -2px -2px 3px var(--light-neumorphism);
            transition: .2s ease-in-out
        }

        .queries_list_item:hover {
            color: var(--tertiary-color);
            text-shadow: 2px 2px 3px var(--dark-neumorphism), -2px -2px 3px var(--light-neumorphism)
        }

        .social-icon:hover {
            cursor: pointer;
            filter: drop-shadow(-4px -4px 2px var(--light-neumorphism)) drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(0)
        }

        .social-icon:active {
            transform: translateY(3px);
            filter: drop-shadow(-2px -2px .5px var(--light-neumorphism)) drop-shadow(2px 2px .5px var(--dark-neumorphism))
        }

        .social-icon {
            transition: .1s ease-out;
            filter: drop-shadow(-4px -4px 2px var(--light-neumorphism)) drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(1)
        }
    </style>
    <link rel="modulepreload" href="/_aleph/main.35f29da1c.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/aleph.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/context.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/error.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/events.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/routing.js" />
    <link rel="modulepreload" href="/_aleph/-/deno.land/x/aleph/util.js" />
</head>

<body>
    <main>
        <div class="container-gui">
            <div class="flex-menubar container-sidebar">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><title>menu to arrow left</title><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="#000000" stroke="#000000"><g class="nc-interact_menu-arrow-o-32" transform="rotate(0 16 16)"> <path data-cap="none" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4 7h24" stroke-dasharray="24 24" stroke-dashoffset="0" transform="translate(0 0) rotate(0 28 7)"/> <path data-cap="none" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4 16h24"/> <path data-cap="none" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4 25h24" stroke-dasharray="24 24" stroke-dashoffset="0" transform="translate(0 0) rotate(0 28 25)"/> </g> <script>!function(){function t(e){var i=e.parentNode;if("svg"!==i.tagName)i=t(i);return i;}function e(t,e,i,n){return 1>(t/=n/2)?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}function i(t){this.element=t,this.container=this.element.querySelectorAll(".nc-interact_menu-arrow-o-32")[0],this.topLine=this.element.getElementsByTagName("path")[0],this.bottomLine=this.element.getElementsByTagName("path")[2],this.time={start:null,total:300},this.status={interacted:!1,animating:!1},this.init()}if(!window.requestAnimationFrame){var n=null;window.requestAnimationFrame=function(t,e){var i=(new Date).getTime();n||(n=i);var a=Math.max(0,16-(i-n)),s=window.setTimeout(function(){t(i+a)},a);return n=i+a,s}}i.prototype.init=function(){var t=this;this.element.addEventListener("click",function(){t.status.animating||(t.status.animating=!0,window.requestAnimationFrame(t.triggerAnimation.bind(t)))})},i.prototype.triggerAnimation=function(t){var e=this.getProgress(t),i=this.status.interacted?this.time.total-e:e;this.animateIcon(i),this.checkProgress(e)},i.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},i.prototype.checkProgress=function(t){var e=this;this.time.total>t?window.requestAnimationFrame(e.triggerAnimation.bind(e)):(this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null)},i.prototype.animateIcon=function(t){if(t>this.time.total)(t=this.time.total);if(0>t)(t=0);var i=e(t,0,1,this.time.total).toFixed(2);this.container.setAttribute("transform","rotate("+180*i+" 16 16)"),this.topLine.setAttribute("transform","translate(0 "+9*i+") rotate("+45*i+" 28 7)"),this.bottomLine.setAttribute("transform","translate(0 "+9*-i+") rotate("+45*-i+" 28 25)"),this.topLine.setAttribute("stroke-dashoffset",12*-i),this.bottomLine.setAttribute("stroke-dashoffset",12*-i)};var a=document.getElementsByClassName("nc-interact_menu-arrow-o-32");if(a)for(var s=0;a.length>s;s++)new i(t(a[s]))}();</script></g></svg></div>
                <div class="menubar-items_list-links">
                    <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Home</a></div>
                    <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Docs</a></div>
                    <div class="wrapper_navLinks"><a class="sidebar_nav-links" href="#">Help</a></div>
                </div>
                <div class="menubar-items_social-icons">
                    <div class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><title>logo github purple</title><g class="nc-icon-wrapper" fill="#7f5af0"><path fill-rule="evenodd" clip-rule="evenodd" fill="#7f5af0" d="M24,0.6c-13.3,0-24,10.7-24,24c0,10.6,6.9,19.6,16.4,22.8 c1.2,0.2,1.6-0.5,1.6-1.2c0-0.6,0-2.1,0-4.1c-6.7,1.5-8.1-3.2-8.1-3.2c-1.1-2.8-2.7-3.5-2.7-3.5c-2.2-1.5,0.2-1.5,0.2-1.5 c2.4,0.2,3.7,2.5,3.7,2.5c2.1,3.7,5.6,2.6,7,2c0.2-1.6,0.8-2.6,1.5-3.2c-5.3-0.6-10.9-2.7-10.9-11.9c0-2.6,0.9-4.8,2.5-6.4 c-0.2-0.6-1.1-3,0.2-6.4c0,0,2-0.6,6.6,2.5c1.9-0.5,4-0.8,6-0.8c2,0,4.1,0.3,6,0.8c4.6-3.1,6.6-2.5,6.6-2.5c1.3,3.3,0.5,5.7,0.2,6.4 c1.5,1.7,2.5,3.8,2.5,6.4c0,9.2-5.6,11.2-11,11.8c0.9,0.7,1.6,2.2,1.6,4.4c0,3.2,0,5.8,0,6.6c0,0.6,0.4,1.4,1.7,1.2 C41.1,44.2,48,35.2,48,24.6C48,11.3,37.3,0.6,24,0.6z"/></g></svg></div>
                    <div class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><title>logo twitter</title><g class="nc-icon-wrapper"><path fill="#69ACE0" d="M48,9.11341c-1.76603,0.78322-3.66389,1.31268-5.65607,1.55067 c2.03332-1.21873,3.5948-3.14867,4.33001-5.44828c-1.90268,1.12855-4.01024,1.94811-6.25344,2.3898 c-1.79636-1.914-4.35574-3.10992-7.18805-3.10992c-5.43885,0-9.84807,4.40923-9.84807,9.84756 c0,0.77191,0.0871,1.5234,0.25495,2.24422c-8.1844-0.41065-15.4407-4.33121-20.29778-10.28923 C2.49387,7.75272,2.0083,9.44432,2.0083,11.24909c0,3.41649,1.73858,6.43073,4.38093,8.19676 c-1.61427-0.05109-3.13272-0.49415-4.4605-1.23177c-0.00069,0.04115-0.00084,0.08231-0.00084,0.1238 c0,4.77144,3.39452,8.75168,7.8996,9.6563c-0.82642,0.22494-1.69641,0.34532-2.5945,0.34532 c-0.63458,0-1.25149-0.06173-1.8528-0.17661c1.25319,3.91234,4.89001,6.75958,9.19929,6.83914 c-3.37036,2.64116-7.61654,4.21549-12.23032,4.21549C1.55427,39.21751,0.77036,39.17088,0,39.08 c4.35814,2.79408,9.53447,4.42431,15.09573,4.42431c18.11374,0,28.0189-15.00571,28.0189-28.01916 c0-0.42694-0.00959-0.85164-0.02846-1.27394C45.01011,12.82274,46.67978,11.08826,48,9.11341z"/></g></svg></div>
                </div>
            </div>
            <div class="container-main-view">
                <div class="container-tab"><button class="tab"
                        style="border-right-color:rgba(0, 0, 0, 0);background-color:rgb(127, 90, 240);color:rgb(0, 0, 0);border-top-right-radius:10px;border-top-left-radius:10px">Latency</button><button
                        class="tab" style="border-right-color:rgb(170, 170, 170)">Success Rate</button><button
                        class="tab" style="border-right-color:rgb(170, 170, 170)">Data Size</button><button class="tab"
                        style="border-right-color:rgb(170, 170, 170)">APIs</button><button class="tab"
                        style="border-right-color:rgba(0, 0, 0, 0)">test</button></div>
                <div class="container-analytics">
                    <div class="query-speed-container"><canvas height="150" width="300"></canvas></div>
                </div><button id="increment" class="hidden-view-buttons"></button><button id="decrement"
                    class="hidden-view-buttons"></button>
            </div>
        </div>
    </main>
    <script src="/_aleph/main.35f29da1c.js" type="module"></script>
</body>

</html>

    <div id="root" />





  </body>
  </html>
`
}