import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: any = [];  

  constructor(private httpClient: HttpClient) {    
   };

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("../assets/data.json");
  }

  getSingleProduct(prodId: Number): Product {
    for (let i = 0; i < this.products.length; i++) {      
      if(this.products[i] === prodId){
        return this.products[i];
      }      
    };
    return null; 
  }; 
}