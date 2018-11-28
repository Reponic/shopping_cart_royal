import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private cartService: CartService, private http: HttpClient) { }
  products: any;
  paid = false;
  priceToPay = 0;
  card: any = {
    number: 0,
    cvv: 0,
    address: '',
    city: '',
    state: '',
    zip: 0
  };

  ngOnInit() {
    this.GetProducts();
  }

  GetProducts() {
    this.priceToPay = 0;

    this.http.get('http://localhost:5000/api/car').subscribe(response => {
      console.log(response);
      this.products = response;
      for (let i = 0; i < this.products.length; i++) {
        this.priceToPay = this.priceToPay + this.products[i].price;
      }
    }, error => {
      console.log(error);
    });

  }

  DeleteProduct(id: number) {
    this.priceToPay = 0;

    this.http.delete('http://localhost:5000/api/car/' + id).subscribe(response => {
      console.log(response);
      this.products = response;
      for (let i = 0; i < this.products.length; i++) {
        this.priceToPay = this.priceToPay + this.products[i].price;
      }
    }, error => {
      console.log(error);
    });

  }

  CheckOut() {
    this.paid = !this.paid;
  }

}
