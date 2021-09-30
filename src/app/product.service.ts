import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];  

  constructor(private httpClient: HttpClient) {    
   };

  setUpProducts() {
    return this.httpClient.get<Product[]>("../assets/data.json");
  };

  getSingleProduct(prodId: number): Product {
    for (let i = 0; i < this.products.length; i++) {      
      if(this.products[i].id === prodId){
        return this.products[i];
      }      
    };
    return null; 
  }; 

  getProducts(): Product[] {
    return this.products;
  }

  setProducts(prods: Product[]){
    this.products = prods;
  }
}