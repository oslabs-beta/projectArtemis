const getLoadingMarkup = () => ({
    script: `
      const loadingWrapper = document.getElementById('loading-wrapper');
      if (loadingWrapper) {
        loadingWrapper.classList.add('fadeOut');
      }
      `,
    container: `
  <style type="text/css">
  /*******************************
GRAPHS ONLY
*******************************/

.query-speed-container {
  position: relative;
  /* ! these values control the height and width of the application */
  height: 65vh;
  width: 72.5vw;
  padding: 15px;
}
/*
  ! Note: height property is avoided to gain height
*/

 /* todo: decrease box shadow by 25%, within container gui */

/*******************************
GLOBAL CSS ONLY
*******************************/
/* align everything to be uniform (each box follows this rule) */
*,
*::before,
*::after {
  box-sizing: border-box;
  /* COLOR PALETTE */
  --primary-color: rgba(22, 22, 26, 0.95);
  --secondary-color: rgb(114, 117, 126);
  --tertiary-color: rgb(127, 90, 240);
  --quaternary-color: rgba(240, 248, 255);

  --dark-neumorphism: rgba(22, 22, 26, .9);
  --light-neumorphism: rgba(240, 248, 255, 0.15);

  --primary--text-color: rgb(127, 90, 240);
  --secondary-text-color: rgb(128, 128, 128);
}

/* this is creating the shell. It's aligning it to the center.  */
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background-color: var(--primary-color);
}

/*******************************
MAIN GUI CONTAINER ONLY
*******************************/
/* this is the container for all of our boxes.  */
.container-gui {
  padding: 2.5%;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  min-width: 90vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 8px 8px 16.2px 1px var(--dark-neumorphism),
    -3px -3px 9px 1px var(--light-neumorphism);
}
/*******************************
ANALYTICS CONTAINER ONLY
*******************************/
.container-tab {
  padding-bottom: 0;
  background-color: var(--tertiary-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 4px 4px 10px .5px var(--dark-neumorphism),
  -1.5px -1.5px 4px .5px var(--light-neumorphism);
  display: flex;
  justify-content: space-between;
}

.container-analytics {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0);
  box-shadow: inset 4px 4px 10px .7px var(--dark-neumorphism),
  inset -1.5px -1.5px 4px .7px var(--light-neumorphism);
}
/*******************************
SIDEBAR ONLY
*******************************/
.flex-menubar {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  padding: 2.5%;
  /* ! fix, give this a media query */
  max-width: 1%;
}

.container-sidebar {
  justify-content: space-between;
}

.menubar-items_social-icons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menubar-items_list-links {
  margin-top: -100%;
  text-align: center;
}

.wrapper_navLinks {
  font-size: 1.7rem;
  margin-top: 13%;
}

a:link {
  text-decoration: none;
}

a {
  color: var(--secondary-text-color);
  transition: .28s ease-in-out;
}

a:focus {
  outline: none;
}

a:hover, a:focus {
  color: var(--tertiary-color);
  text-decoration: underline;
}

.queries_list_item {
  text-transform: uppercase;
  font-size: 1.1rem;
  color: var(--secondary-text-color);
  font-weight: 5250;
  font-family: 'Arial';
  text-shadow: 2px 2px 3px var(--dark-neumorphism),
    -2px -2px 3px var(--light-neumorphism);
  transition: 0.2s ease-in-out;
}

.queries_list_item:hover {
  color: var(--tertiary-color);
  text-shadow: 2px 2px 3px var(--dark-neumorphism),
    -2px -2px 3px var(--light-neumorphism);
}

/*
* note: social icons must have a div wrapper to gain css functionality
*/
.social-icon:hover {
  cursor: pointer;
  filter: drop-shadow(-4px -4px 2px var(--light-neumorphism))
    drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(0);
}

.social-icon:active {
  transform: translateY(3px);
  filter: drop-shadow(-2px -2px 0.5px var(--light-neumorphism))
    drop-shadow(2px 2px 0.5px var(--dark-neumorphism));
}

.social-icon {
  transition: 0.1s ease-out;
  filter: drop-shadow(-4px -4px 2px var(--light-neumorphism))
    drop-shadow(4px 4px 2px var(--dark-neumorphism)) grayscale(1);
}
.tab {
    padding: 0.5%;
    background-color: rgba(0, 0, 0, 0);
    color: rgba(128, 128, 128);
    border-top-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
    border-left-color: rgba(0, 0, 0, 0);
    flex-grow: 1;
    transition: 500ms ease;
    font-weight: bold;
    font-size: .95rem;
  }

  .tab:focus {
    outline: none;
  }

  .tab:hover, .tab:focus {
    cursor: pointer;
    border-bottom-color: var(--tertiary-color);
    color: var(--primary--text-color);
  }

  .hidden-view-buttons {
    position: absolute;
    display: none;
  }

  <div class="text">Loading
    <span class="dGfHfc">The Gui</span>
  </div>
  </div>
  `,
  })

  export default getLoadingMarkup