import { Injectable } from '@angular/core';
import { Cart } from './models/cart';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];
  cartTotal: number = 0.00;

  constructor(private productService: ProductService) { }

  addToCart(prodId: number, quantity: number){
    let itemInCart: Cart = this.cart.find((i: { id: number; }) => i.id === prodId);
    if(itemInCart === undefined){
      let prod: Cart = this.productService.products.find((i: { id: number; }) => i.id === prodId) as Cart;      
      prod.quantity = quantity;
      this.cart.push(prod);     
    } else {
      itemInCart.quantity = quantity;
    };
  }

  getCart(): Cart[] {
    return this.cart;
  }  

  calculateCartTotal(): number {
    let total: number = 0.00;
    this.cart.forEach(item => {
      total += Number(((item.quantity * item.price)).toFixed(2));
    });
    return total;    
  }
}
