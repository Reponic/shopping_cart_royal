import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'http://localhost:5000/api/car/';
  products: any;

  constructor(private http: HttpClient) {
  }

  GetProducts() {
    return this.http.get(this.baseUrl).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  AddProductToCart(product: any) {
    const randomnumber =  Math.floor((Math.random() * 1000) + 1);;
    console.log(randomnumber);

    let productToAdd = {
      id: randomnumber,
      imgURL: product.imgURL,
      name: product.name,
      price: product.price,
      quantity: product.quantity
    };

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post(this.baseUrl, productToAdd).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  DeleteProduct(id: number) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post(this.baseUrl + id, {headers: headers});

  }

}
