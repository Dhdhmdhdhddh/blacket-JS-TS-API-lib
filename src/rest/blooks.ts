import { RestClient } from "./RestClient";

export class BlooksClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async sellBlooks(blookIds: string[]) {
        return this.rest.put("/blooks/sell-blooks", { blookIds });
    }

    async getAllBlooks() {
        return this.rest.get("/data/blooks");
    }

    async getAllPacks() {
        return this.rest.get("/data/packs");
    }

    async getAllRarities() {
        return this.rest.get("/data/rarities");
    }
}