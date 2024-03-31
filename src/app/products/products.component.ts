import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductService } from '../services/product.service';
import { IProduct } from '../shared/components/product-card/models/product.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products$ =this.productService.getProducts() as Observable<IProduct[]>

  constructor(private store: Store<{cart: {products: IProduct[]}}>){
  }

  ngOnInit(): void { }

  addItemtoCart(product: IProduct){
    this.store.dispatch(addToCart({product}));

  }
}
