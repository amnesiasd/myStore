import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.emptyCart();
  }

}
