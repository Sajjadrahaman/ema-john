import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in database, you have to use async await
    //This is same as Shop.jsx setCart new item loop
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;

    //if sometime you need to send two things
    // return [products, savedCart];
    //another option:
    // return { products, cart: savedCart}
}

export default cartProductsLoader;