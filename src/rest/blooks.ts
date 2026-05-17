import { RestClient } from "./RestClient";

export class BlooksClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async getAllBlooks() {
        return this.rest.get("/data/index.json");
    }

    async openPack(packName: string) {
        return this.rest.post("/worker3/open", { pack: packName });
    }
}