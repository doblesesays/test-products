import { Sessions } from "./user.model";
import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
    template: ''
})

export class LogoutScreenComponent {
    constructor(private sessions: Sessions, private router: Router) {
        sessions.deleteCurrentSession();
        router.navigate(['signin']);
        console.log(sessions.getCurrentSession());
    }
}