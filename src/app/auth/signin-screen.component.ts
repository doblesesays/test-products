import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Sessions } from './user.model';
import { Routing } from '../app.routing';
import { Router } from "@angular/router";

@Component ({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html'
})

export class SigninScreenComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private sessions: Sessions, private router: Router){}

    ngOnInit () {
        this.signinForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8)
            ])
        });
    }

    onSubmit() {
        if (this.signinForm.valid) {
            const { username, password } = this.signinForm.value;
            const user = new User(username, password);
            if(this.sessions.exist(user)){
                this.router.navigate(['/']);
            } else {
                this.router.navigate(['signin']);
            }
        }
    }
}