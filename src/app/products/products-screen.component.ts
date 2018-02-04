import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-products-screen',
  template: 'vista de productos'
})
export class ProductsScreenComponent {
  data;

  constructor(private http: Http) {
    this.http.get('assets/products.json')
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });
    }
}