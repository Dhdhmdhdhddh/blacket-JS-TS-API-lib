import { RestClient } from "./RestClient";

export class AuthClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async login(username: string, password: string) {
        return this.rest.post("/auth/login", { username, password });
    }

    async register(username: string, password: string) {
        return this.rest.post("/auth/register", { username, password });
    }

    async logout() {
        return this.rest.delete("/auth/logout");
    }
}