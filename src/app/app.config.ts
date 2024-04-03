import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';
import { productReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'product', reducer: productReducer }),
    provideEffects(ProductEffect),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
