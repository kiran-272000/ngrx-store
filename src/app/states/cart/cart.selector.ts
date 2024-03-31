import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { CartState, calculateTotalPrice } from "./cart.reducer";


export const selectCartState = (state: AppState)=> state.cart;

export const selectCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.products
);

export const totalCartAmount = createSelector(
    selectCartState,
    // (state: CartState)=> calculateTotalPrice(state.products)
    (state: CartState) => state.totalPrice
)