import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product = ({ product }) => {

    const { addToCart, products, removeFromCart } = useShop();
    const [isInCart, setIsInCart] = useState(true);

    const handleAddToCart = () => {
        if (isInCart) {
            removeFromCart(product)
        } else {
            addToCart(product)
        }
    }

    useEffect(() => {
        const isCart = products.filter((pro) => pro.id === product.id);
        if (isCart.length > 0) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    }, [products, product.id]);

    return (
        <div className="card" style={{
            minHeight: "100%",
            background: `linear-gradient(rgba(0,0,0,0.1), rgba(0, 0, 0, 0.47)),url(${product.UrlImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="info">
                <span>{product.name}</span>
                <span>${product.price}</span>
            </div>
            <button className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`} onClick={handleAddToCart}>{isInCart ? "-" : "+"}</button>
        </div>
    );
}
export default Product;