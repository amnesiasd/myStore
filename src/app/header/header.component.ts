import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {     
  }

  ngOnInit(): void {
    //this.cartQuantity = this.cartService.cart.length;
    this.cartQuantity = this.cartService.getCart().length;
  }
}
