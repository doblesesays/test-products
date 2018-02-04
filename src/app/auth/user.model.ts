export class User {
    constructor(
        public username: string,
        public password: string,
        //public _id?: string
    ) { }
}

export class Sessions {
    constructor(
        public sessions: Array<User>
    ) {}

    public getSessions() {
        return this.sessions;
    }
}