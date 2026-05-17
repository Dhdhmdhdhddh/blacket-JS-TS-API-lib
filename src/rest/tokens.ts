import { RestClient } from "./RestClient";

export class TokensClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async claimDaily() {
        return this.rest.put("/quests/claim-daily-tokens", {});
    }
}