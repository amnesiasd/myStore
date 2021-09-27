import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor(product: Product) { 
    this.product = product;
    console.log(product);
  }

  ngOnInit(): void {
    // this.product = {
    //   id: 1,
    //   name:'Thingamajiggy',
    //   price: 179.99,
    //   url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   desc: "Yada Yada"
    // };
  }

  addToCart() {
    alert(`You've added 2 items at ${this.product.price} to cart!`);
  }

}
