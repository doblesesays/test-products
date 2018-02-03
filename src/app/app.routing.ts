import { Routes, RouterModule } from "@angular/router";
import { SigninScreenComponent } from "./auth/signin-screen.component";
import { SignupScreenComponent } from "./auth/signup-screen.component";
import { ProductsScreenComponent } from "./products/products-screen.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: ProductsScreenComponent,
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SigninScreenComponent
    },
    {
        path: 'signup',
        component: SignupScreenComponent
    }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);