import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

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
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) { 
  }

  ngOnInit(): void {    
    for (let i = 0; i < this.productService.products.length; i++) {
      const prod = this.productService.products[i];        
      this.prodId = Number(this.route.snapshot.paramMap.get('id'));
      if( prod.id === this.prodId){
        this.product = prod;
        return;
      }            
    };    
  }

  ngOnDestroy(): void {
    this.prodId = null;
    this.product = null;
  }

  addToCart() {
    alert(`You've added ${this.selectedQuantity} items at ${this.product.price} to cart!`);
    this.cartService.addToCart(this.prodId, this.selectedQuantity);  
    this.router.navigate(['']);
  }

  changeQuantity(quantity){
    this.selectedQuantity = quantity;
  }

}
