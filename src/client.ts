export class BlacketClient {
    private token: string;
    private baseUrl: string = "https://blacket.org";

    constructor(options: { username: string; password: string }) {
        this.token = "";
        console.log("BlacketClient created!");
    }

    getToken(): string {
        return this.token;
    }
}