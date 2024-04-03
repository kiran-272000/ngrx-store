import { Injectable, inject } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../services/product.service";
import { Actions } from "@ngrx/effects";

import * as ProductActions from './product.action'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect {
    private productService = inject(ProductService);
    action$ = inject(Actions);

    loadPRODUCTS$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(ProductActions.loadProduct),
            switchMap(()=>
                this.productService.getProducts().pipe(
                    map(res => ProductActions.loadProductSucess({products: res})),
                    catchError((error: {message: string})=> of(
                        ProductActions.loadProductFailure({'errorMessage': error.message})
                    ))
                )
            )
        )
    })
}