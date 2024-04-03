import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductService } from '../services/product.service';
import { IProduct } from '../shared/components/product-card/models/product.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

import * as ProductActions from '../states/product/product.action'
import * as ProductSelector from '../states/product/product.selector'


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products$!: Observable<IProduct[]>
  error$!: Observable<string|null>;

  constructor(private store: Store<{cart: {products: IProduct[]}}>){
    this.store.dispatch(ProductActions.loadProduct());
    this.products$ = this.store.select(ProductSelector.selectAllProducts)
    this.error$ = this.store.select(ProductSelector.selectProductError)
  }

  ngOnInit(): void { }

  addItemtoCart(product: IProduct){
    this.store.dispatch(addToCart({product}));
  }
}
