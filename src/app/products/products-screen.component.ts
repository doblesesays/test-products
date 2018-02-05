import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Sessions } from '../auth/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.css']
})
export class ProductsScreenComponent {
  products = [];

  constructor(private http: Http, private sessions: Sessions, private router: Router) {
    console.log(this.sessions.getCurrentSession());
    if (this.sessions.existCurrentSession()) {
      this.http.get('assets/products.json')
        .subscribe(res => {
          this.products = res.json();
          console.log(this.products);
        });
    } else {
      this.router.navigate(['signin']);
    }
  }
}