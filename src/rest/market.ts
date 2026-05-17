import { RestClient } from "./RestClient";

export class MarketClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async openPack(packName: string) {
        return this.rest.post("/market/open-pack", { pack: packName });
    }

    async convertDiamonds(amount: number) {
        return this.rest.put("/market/convert-diamonds", { amount });
    }
}