import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../_services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient, private cartService: CartService) { }
  products: any;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get('http://localhost:5000/api/products').subscribe(response => {
      console.log(response);
      this.products = response;
    }, error => {
      console.log(error);
    });
  }

  AddProduct(product: any) {
    this.cartService.AddProductToCart(product).subscribe(() => {
      console.log('Product Added!');
    }, error => {
      console.log(error);
    });
  }

}
