import { RestClient } from "./RestClient";

export class LeaderboardClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async getLeaderboard() {
        return this.rest.get("/leaderboard");
    }
}