import HomeScreen from './screens/HomeScreen.js';

const router = () => {
    const main = document.getElementById("main_container");
    main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);