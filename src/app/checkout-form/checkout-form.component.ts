import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  street: string;
  city:string;
  state: string;
  zip: string;
  cart: Cart[] = [];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

}
