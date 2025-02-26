import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-show-product',
  imports: [NgClass, NgIf],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent {

  @Input()
  product!: Product;

  get isOnSale(): boolean {
    return this.product?.onSale ?? false;
  }
  
}
