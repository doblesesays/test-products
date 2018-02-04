import { Injectable } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";

export class User {
    constructor(
        public username: string,
        public password: string,
        //public _id?: string
    ) { }

    public equals(user: User) {
        if (this.username == user.username && this.password == user.password) {
            return true;
        } else {
            return false;
        }
    }
}

@Injectable()
export class Sessions {

    private sessions: Array<User> = [];
    
    constructor() {
        this.sessions.push(new User('doblesesays', 'dddddddd'));
    }

    public getSessions() {
        return this.sessions;
    }

    public addSession(user: User) {
        this.sessions.push(user);
    }

    public exist(user: User) {
        let back : boolean = false;
        this.sessions.forEach(session => {
            if (user.equals(session)) {
                back = true;
            }
        })
        return back;
    }
}