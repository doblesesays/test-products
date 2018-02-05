import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.css']
})
export class ProductsScreenComponent {
  products = [];
  data = [];

  constructor(private http: Http) {
    this.http.get('assets/products.json')
      .subscribe(res => {
        this.data = res.json();
        
        for (var x in this.data) {
          this.data.hasOwnProperty(x) && this.products.push(this.data[x])
        }
        console.log(this.products.pop);
      });
  }
}