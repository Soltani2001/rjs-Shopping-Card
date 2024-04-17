import { useContext } from "react";
import { createContext, useReducer } from "react"
import { sumPrducts } from "../helpers/helper";

const initialState = {
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
};

const reducer =(state, action)=>{
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity:1})
            }
            return{
                ...state,
                ...sumPrducts(state.selectedItems),
                checkout:false,
                // total:sumPrducts()
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                selectedItems : [...newSelectedItems],
                ...sumPrducts (newSelectedItems)
            }
        case "INCREASE":
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[index].quantity ++;
            return{
                ...state,
                ...sumPrducts(state.selectedItems)
            }
        case "DECREASE":
            const decreseIndex = state.selectedItems.findIndex(item=> item.id === action.payload.id);
            state.selectedItems[decreseIndex].quantity --;
            return{
                ...state,
                ...sumPrducts(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }
        default:
            throw new Error("Invalid action")
            
    }
}

const CartContext = createContext();

function CartProvider({children}) {
    const [state, dispach] = useReducer(reducer, initialState)
    return <CartContext.Provider value={{state, dispach}}>
        {children}
    </CartContext.Provider>
}

const useCart =()=>{
    const {state, dispach} = useContext(CartContext);
    return [state, dispach]
}

export default CartProvider
export {useCart}