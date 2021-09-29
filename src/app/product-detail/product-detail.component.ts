import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  prodId: number;
  quantity = [1,2,3,4,5,6,7,8,9];
  selectedQuantity: number = 1;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {

    // this.prodId = Number(this.route.snapshot.paramMap.get('id'));
    // this.product = this.productService.getSingleProduct(this.prodId);
    // console.log("Success");
    // console.log(this.product.name);
    
    this.productService.getProducts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];        
      };
      this.products = res;
      for (let i = 0; i < this.products.length; i++) {
        const prod = this.products[i];        
        this.prodId = Number(this.route.snapshot.paramMap.get('id'));
        if( prod.id === this.prodId){
          this.product = prod;
          return;
        }      
      }
    });    
  }

  ngOnDestroy(): void {
    this.prodId = null;
    this.product = null;
  }

  addToCart() {
    alert(`You've added ${this.selectedQuantity} items at ${this.product.price} to cart!`);
  }

  changeQuantity(quantity){
    this.selectedQuantity = quantity;
  }

}
