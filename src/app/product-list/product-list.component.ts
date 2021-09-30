import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    if(this.productService.getProducts().length === 0){
      this.productService.setUpProducts().subscribe((res) => {
        for (let index = 0; index < res.length; index++) {
          const element = res[index];        
        };
        this.products = res;
        this.productService.setProducts(res);
      })  
    } else {
      this.products = this.productService.getProducts();
    }
  }
};
