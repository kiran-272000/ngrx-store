import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../shared/components/product-card/models/product.interface";

export const addToCart = createAction('[Cart Component] AddToCart', props<{product: IProduct}>());

export const incrementProductCount = createAction('[Cart Component] IncrementProduct', props<{productId: number}>());

export const decrementProductCount = createAction('[Cart Component] DecrementProduct', props<{productId: number}>());

export const removeItem = createAction('[Cart Component] RemoveItem', props<{productId: number}>());