import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Cart;
  quantity = [1,2,3,4,5,6,7,8,9];
  quantityUpdate: number;
  hideButton: boolean = false;
  @Output() checkoutTotalUpdate = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
         
  }

  setUpCartItem(prodId: number){
    this.cartItem = this.cartService.cart.find((i: { id: number; }) => i.id === prodId); 
    this.quantityUpdate = this.cartItem.quantity;
  }

  
  changeQuantity(newQuantity: number){
    this.quantityUpdate = newQuantity;
    this.hideButton = true;
  }

  updateCart(){
    this.cartItem.quantity = this.quantityUpdate;
    console.log(this.cartItem);
    this.checkoutTotalUpdate.emit(this.cartService.calculateCartTotal());
    this.hideButton = false;
  }

}
