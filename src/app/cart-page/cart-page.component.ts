import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  upCartTotal: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  updateCartTotal(){
    console.log(this.cartService.getCart().length);
    this.upCartTotal = this.cartService.getCart().length;
  }

}
