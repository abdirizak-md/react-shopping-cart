// import styleMenu from "./header.module.css"
import { Link } from "react-router-dom";
import "../style.css"
import useShop from "../ShopContext";

const Header = () => {
    // const menuStyle = {
    //     backgroundColor: "skyblue", padding: 10, borderRadius: 10
    // }
    const { products } = useShop();
    return (
        <div className="menu" >
            <Link className="logo">Reactfiy</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <Link to="/cart"><span className="cart">{products.length}</span>
            </Link>


            {/* <a href="#">Logo</a>
            <ul className="menu-items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>

            </ul>
            <a href="#">{cart}</a> */}
        </div>
    );
}

export default Header