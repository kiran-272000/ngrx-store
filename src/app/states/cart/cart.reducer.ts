import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/components/product-card/models/product.interface";
import { addToCart, decrementProductCount, incrementProductCount, removeItem } from "./cart.action";

export interface CartState{
    products: IProduct[];
    totalPrice: number
}

export const initialCartState: CartState={
    products: [],
    totalPrice: 0
}

export function calculateTotalPrice(products: IProduct[]){
    return products.reduce((total,product)=> total +(product.price * product.quantity),0);
}
export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (state, {product})=>{
        const updatedCart = [...state.products,product]
        return {
            ...state,
            products: updatedCart,
            totalPrice: calculateTotalPrice(updatedCart)
        };
    }),
    on(incrementProductCount, (state, {productId})=>{
        const updatedCart = state.products.map(product=> product.id === productId ? {...product, quantity: product.quantity+1}: product)
        return {
            ...state,
            products: updatedCart,
            totalPrice: calculateTotalPrice(updatedCart)
        };
    }),
    on(decrementProductCount, (state, {productId})=>{
        const updatedCart = state.products.map(product=> product.id === productId? {...product, quantity: product.quantity - 1} : product)
        return {
            ...state,
            products: updatedCart,
            totalPrice: calculateTotalPrice(updatedCart)
        }
    }),
    on(removeItem, (state, {productId})=>{
        
        const updatedCart = state.products.filter(product =>{
           return product.id !== productId
        })
        return {
            ...state,
            products: updatedCart,
            totalPrice: calculateTotalPrice(updatedCart)
        }
    })
);