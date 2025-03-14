import Product from "./Product";
const products = [
    {
        id: 1,
        name: "Pizza",
        UrlImage: "https://plus.unsplash.com/premium_photo-1679924471066-dd984e92f395?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9.99

    },
    {
        id: 2,
        name: "vagan vassel sowl",
        UrlImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 5.98
    },
    {
        id: 3,
        name: "Past",
        UrlImage: "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9.99

    },
    {
        id: 4,
        name: "Hamberger",
        UrlImage: "https://images.unsplash.com/photo-1740838535478-8f67b29f1c00?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9.99

    },
    {
        id: 5,
        name: "Undo Salad",
        UrlImage: "https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 9.99

    },
    {
        id: 6,
        name: "Cool Drink",
        UrlImage: "https://plus.unsplash.com/premium_photo-1721780793069-5576631f1b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 10.99

    },
    {
        id: 7,
        name: "Meat",
        UrlImage: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 12.99

    },
    {
        id: 8,
        name: "Rice",
        UrlImage: "https://plus.unsplash.com/premium_photo-1675814316651-3ce3c6409922?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 7.99

    },
]
const Products = () => {
    return (
        <div className="grid">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>

    );
}
export default Products;