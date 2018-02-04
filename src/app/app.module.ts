import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

//material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

//import de componentes dedicados a la aplicación
import {SigninScreenComponent} from './auth/signin-screen.component';
import {SignupScreenComponent} from './auth/signup-screen.component';
import { ProductsScreenComponent } from "./products/products-screen.component";
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    ProductsScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    MatIconModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
