import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";
const addToCart = (item, forceUpDate = false) => {
    let cartItems = getCartItems();

};
const CartScreen = {
    after_render: () => {},
    render: async() => {
        const request = parseRequestUrl;
        if (request.id) {
            const product = await getProduct(request.id);
            addToCart({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty: 1,
            })
        }

        return `<div> Cart Screen </div>`,
    }
}
export default CartScreen;