import CartProduct from "../component/CartProduct"
import Payment from "../component/Payment";
import useShop from "../ShopContext";

const Cart = () => {
    // setCart(60);

    const { products } = useShop();

    if (products.length <= 0) return <div><h1 style={{ color: "red" }}>Your Cart Is Empty!</h1></div>
    return (
        <div className="cart-container">
            <CartProduct />
            <Payment />
        </div>
    );
}
export default Cart;