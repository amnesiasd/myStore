import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];        
      };
      this.products = res;
      this.productService.products = res;
    });
    console.log(this.cartService.cart.length);
  }

}
