import { RestClient } from "./RestClient";

export class AuctionsClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async getAuctions(filters?: Record<string, any>) {
        const query = filters
            ? "?" + new URLSearchParams(filters as any).toString()
            : "";
        return this.rest.get(`/auctions${query}`);
    }

    async createAuction(data: object) {
        return this.rest.post("/auctions", data);
    }

    async buyItNow(id: number, data: object) {
        return this.rest.put(`/auctions/${id}/bin`, data);
    }

    async bid(id: number, amount: number) {
        return this.rest.post(`/auctions/${id}/bid`, { amount });
    }

    async removeAuction(id: number) {
        return this.rest.delete(`/auctions/${id}`);
    }
}