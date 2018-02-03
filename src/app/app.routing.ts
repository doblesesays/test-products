import { Routes, RouterModule } from "@angular/router";
import { SigninScreenComponent } from "./auth/signin-screen.component";
import { SignupScreenComponent } from "./auth/signup-screen.component";

const APP_ROUTES: Routes = [
    /*{
        path: '',
        component: el componente de los productos,
        pathMatch: 'full'
    },*/
    {
        path: 'signin',
        component: SigninScreenComponent
    },
    {
        path: 'signup',
        component: SignupScreenComponent
    }
];