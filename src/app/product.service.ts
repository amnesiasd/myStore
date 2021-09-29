import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any = [];
  prodId: Number;
  selectedProduct: Product = new Product();

  constructor(private httpClient: HttpClient) {    
   };

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("../assets/data.json");
  }

  getSingleProduct(prodId: Number): Product {
    this.getProducts().subscribe((res) => {
      // for (let index = 0; index < res.length; index++) {
      //   const element = res[index];        
      // };
      console.log(prodId);
      this.products = res;
    
      //this.getProducts().subscribe(prods => this.products = prods);;
      console.log(this.products);
      for (let i = 0; i < this.products.length; i++) {
        this.selectedProduct = this.products[i];        
        if(this.selectedProduct.id === prodId){
          return this.selectedProduct;
        }      
      };      
    });
    return this.selectedProduct; 
  }; 
}