import { createAction, props } from "@ngrx/store"
import { IProduct } from "../../shared/components/product-card/models/product.interface";

export const loadProduct = createAction('[Product Component] loadProduct');

export const loadProductSucess = createAction('[Product Component] loadProductSucess', props<{products: IProduct[]}>()
);

export const loadProductFailure = createAction('[Product Component] loadProductFailure', props<{errorMessage: string}>()
);