import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NgFor } from '@angular/common';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  imports: [ShowProductComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio-productos';

  products : Product[] = [
    { name: 'Laptop', price: 1500, inStock: true, onSale: false },
    { name: 'Smartphone', price: 800, inStock: true, onSale: true },
    { name: 'Tablet', price: 400, inStock: false, onSale: false },
    { name: 'Monitor', price: 200, inStock: true, onSale: true },
    { name: 'Teclado mecánico', price: 100, inStock: true, onSale: false },
    { name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false },
    { name: 'Impresora láser', price: 250, inStock: true, onSale: true },
    { name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false },
    { name: 'Silla ergonómica', price: 300, inStock: false, onSale: true },
    { name: 'Micrófono profesional', price: 180, inStock: true, onSale: false },
    { name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true },
    { name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false },
    { name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true },
    { name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false },
    { name: 'Smartwatch', price: 250, inStock: true, onSale: true },
  ]
}
