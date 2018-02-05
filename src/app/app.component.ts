import { Component } from '@angular/core';
import { Sessions } from './auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Sessions ]
})
export class AppComponent {
  title = 'app';
  constructor(private sessions: Sessions, private router: Router){}
}
