import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component ({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html'
})

export class SigninScreenComponent implements OnInit {
    signinForm: FormGroup;

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
            console.log(user);
        }
    }
}