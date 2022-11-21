let key1 = document.getElementById("key1");

key1.addEventListener('click', function() {
    // document.getElementById("secretLink").classList.remove(locked);
    document.getElementById("secretLink").classList.add(unlocked);
})

// const open = 'open';
// // const active = 'active';

// const locked ="locked"
const unlocked = 'unlocked'
// const modalOpen = '[data-open]';
// const modalClose = '[data-close]';
// const isVisible = 'is-visible';

// //From EastSleepCode 
// const theme = 'theme';
// const dataTheme = 'data-theme';
// const themeTab = '.theme-tab';
// const switcherBtn = '.switcher-btn';
// const dark = 'dark';
// const light = 'light';
// const active = 'active';

// // const dataFilter = '[data-filter]';
// const portfolioData = '[data-item]';

// /* Theme */
// const toggleTheme = document.querySelector(themeTab);
// const switcher = document.querySelectorAll(switcherBtn);
// const currentTheme = localStorage.getItem(theme);


// const root = document.documentElement;

// /* Modal */
// const openModal = document.querySelectorAll(modalOpen);
// const closeModal = document.querySelectorAll(modalClose);


// //full site modal 'open buttons'
// for (const elm of openModal) {
//     elm.addEventListener('click', function () {
//         const modalId = this.dataset.open;
//         document.getElementById(modalId).classList.add(isVisible);
//     })
// };

// close buttons
// for (const elm of closeModal) {
//     elm.addEventListener('click', function () {
//         this.parentElement.parentElement.classList.remove(isVisible);
//     })
// };
// Add unlocked class to .secret.locked dix in first part after clicking on #secretKey
 

// document.getElementById("secretKey").addEventListener('click', function() {
//     document.getElementById("secretLink").classList.remove(locked);
//     document.getElementById("secretLink").classList.add(unlocked);
// })



// const setActive = (elm, selector) => {
//     if (document.querySelector(`${selector}.${active}`) !== null) {
//         document.querySelector(`${selector}.${active}`).classList.remove(active);
//     }
//     elm.classList.add(active);
// };

// const setTheme = (val) => {
//     if (val === dark) {
//         root.setAttribute(dataTheme, dark);
//         localStorage.setItem(theme, dark);
//     } else {
//         root.setAttribute(dataTheme, light);
//         localStorage.setItem(theme, light);
        
//     }
// };

// if (currentTheme) {
//     root.setAttribute(dataTheme, currentTheme);
//     switcher.forEach((btn) => {
//         btn.classList.remove(active);
//     });
//     if (currentTheme === dark) {
//         switcher[1].classList.add(active);
//     } else {
//         switcher[0].classList.add(active);
//     };
// };

// toggleTheme.addEventListener('click', function () {
//     const tab = this.parentElement.parentElement;
//     if (!tab.className.includes(open)) {
//         tab.classList.add(open);
//     } else {
//         tab.classList.remove(open);
//     }
// });

// for (const elm of switcher) {
//     elm.addEventListener('click', function () {
//         const toggle = this.dataset.toggle;
//         // set active state
//         setActive(elm, switcherBtn);
//         setTheme(toggle);
//     })
// };

