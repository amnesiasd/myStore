import { Component, OnInit } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Cart[] = [];
  cartTotal: number = 0.00;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.cartTotal = Number(this.cartService.calculateCartTotal().toFixed(2));
  }

  updateCheckout(){
    this.cartTotal = Number(this.cartService.calculateCartTotal().toFixed(2));
  }

}
