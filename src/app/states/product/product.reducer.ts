import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/components/product-card/models/product.interface";
import * as ProductActions from './product.action'
export interface ProductState{
    products: IProduct[];
    error: string | null;
}

export const initialState: ProductState = {
    products: [],
    error: null,
}

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductSucess, (state, {products})=>({
        ...state,
        products,
        error: null
    })),
    on(ProductActions.loadProductFailure , (state, {errorMessage})=>({
        ...state,
        error: errorMessage
    }))
)