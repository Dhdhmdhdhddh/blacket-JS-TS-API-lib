import { RestClient } from "./RestClient";

export class UserClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async getUser() {
        return this.rest.get("/worker3/user");
    }

    async getUserById(id: string) {
        return this.rest.get(`/worker3/user/${id}`);
    }
}