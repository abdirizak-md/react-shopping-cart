import { createContext, useContext, useReducer } from "react"
import ShopReducer, { initialState } from "./ShopReducer"

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ShopReducer, initialState);

    const addToCart = (product) => {
        const updatedProduct = state.products.concat(product);
        calculatePrice(updatedProduct)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProduct
            }
        });

    }
    const removeFromCart = (product) => {
        const updatedProduct = state.products.filter(prodct => prodct.id !== product.id);
        calculatePrice(updatedProduct)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedProduct
            }
        });

    }

    const calculatePrice = (products) => {
        let total = 0;

        products.forEach(prod => {
            total += prod.price
        });

        dispatch({
            type: "CALCULATE_TOTAL_PRICE",
            payload: total
        })
    }

    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
        calculatePrice
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>


};

const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error("context must be defined inside shopcontext!");

    }
    return context;

}

export default useShop;