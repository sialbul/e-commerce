import CartScreen from './screens/CartScreen';
import Error404Screen from './screens/Error404Screen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import { parseRequestUrl } from './utils';

const routes = { // routes a oject and "/" is key and "HomeScreen" is a value
    "/": HomeScreen,
    "/products": ProductsScreen,
    "/product/:id": ProductScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
}

const router = async() => {
    const request = parseRequestUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');

    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const main = document.getElementById("main_container");
    main.innerHTML = await screen.render();
    await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);