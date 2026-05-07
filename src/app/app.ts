import { Component, signal } from '@angular/core';
import { MiniCart } from './mini-cart/mini-cart';

@Component({
  selector: 'app-root',
  imports: [MiniCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Mini_Projects');
}
