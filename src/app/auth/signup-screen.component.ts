import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Sessions } from './user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html'
})
export class SignupScreenComponent implements OnInit {

  signupForm: FormGroup;
  success = false;

  constructor(private sessions: Sessions) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
    this.success = false;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.success = true;
      const { username, password } = this.signupForm.value;
      const user = new User(username, password);
      this.sessions.addSession(user);
      console.log(this.sessions);
    }
  }

}