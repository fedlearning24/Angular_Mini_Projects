import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  imports: [],
  templateUrl: './mini-cart.html',
  styleUrl: './mini-cart.css',
})
export class MiniCart {

  private STORAGE_KEY = 'cart_data';

  constructor() {
    effect(() => {
      const value = this.cart();

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
      }
    })
  }

  loadCart(): any[] {
    if (typeof localStorage === 'undefined') return [];

    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  products = [
    { id: 1, name: 'Shirt', price: 500 },
    { id: 2, name: 'Shoes', price: 1200 },
    { id: 3, name: 'Watch', price: 2000 }
  ];

  cart = signal<any[]>(this.loadCart());

  addToCart(product: any) {
    this.cart.update(c => [...c, product]);
  }

  removeFormCart(index: number) {
    this.cart.update(c => c.filter((_, i) => i !== index));
  }

  count = computed(() => this.cart().length);

  total = computed(() =>
    this.cart().reduce((acc, item) => acc + item.price, 0)
  );
}
