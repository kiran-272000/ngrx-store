import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct } from '../shared/components/product-card/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);

  getProducts(){
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map((products)=>{
        return products.map(product=>{
          return {...product, quantity:1}
        })
      })
    )
  }
}
