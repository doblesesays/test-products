import { Component } from '@angular/core';
import { Sessions } from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Sessions ]
})
export class AppComponent {
  title = 'app';
}
