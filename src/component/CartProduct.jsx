import useShop from "../ShopContext"

const CartProduct = () => {
    const { products, removeFromCart, total } = useShop();
    return (
        <div className="cart-products">
            <h2 className="head">Cart products</h2>
            {products.map((product) => (
                <div className="cart-product">
                    <div className="cart-title-image">
                        <img src={product.UrlImage} alt="" />
                        <span>{product.name}</span>
                    </div>
                    <h5>{product.price}</h5>
                    <span className="delete" onClick={() =>
                        removeFromCart(product)}>delete</span>
                </div>
            ))}
            <div className="total-price">
                <h2>Total price: ${total}</h2>
            </div>
        </div>
    );
}

export default CartProduct;