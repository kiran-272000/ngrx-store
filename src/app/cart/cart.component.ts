import { Component } from '@angular/core';
import { AppState } from '../states/app.store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/components/product-card/models/product.interface';
import { selectCartProducts, totalCartAmount } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { decrementProductCount, incrementProductCount, removeItem } from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart$ : Observable<IProduct[]> = this.store.select(selectCartProducts);
  totalPrice$  = this.store.select(totalCartAmount);
  constructor(private store: Store<AppState>){ }

  increment(id: number){
    this.store.dispatch(incrementProductCount({productId:id}))
  }
  decrement(id: number){
    this.store.dispatch(decrementProductCount({productId:id}))
  }
  remove(id: number){
    this.store.dispatch(removeItem({productId:id}))
  }
}
