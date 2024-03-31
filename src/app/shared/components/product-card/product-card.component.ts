import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IProduct } from './models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() handleAdd: EventEmitter<any> = new EventEmitter;


  addtoCart(product: IProduct){
    this.handleAdd.emit(product);
  }
}
