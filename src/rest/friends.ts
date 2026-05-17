import { RestClient } from "./RestClient";

export class FriendsClient {
    private rest: RestClient;

    constructor(rest: RestClient) {
        this.rest = rest;
    }

    async getFriends() {
        return this.rest.get("/friends");
    }

    async addFriend(id: string) {
        return this.rest.post(`/friends/${id}`, {});
    }

    async removeFriend(id: string) {
        return this.rest.delete(`/friends/${id}`);
    }

    async blockUser(id: string) {
        return this.rest.post(`/friends/${id}/block`, {});
    }

    async unblockUser(id: string) {
        return this.rest.post(`/friends/${id}/unblock`, {});
    }

    async revokeRequest(id: string) {
        return this.rest.post(`/friends/${id}/revoke`, {});
    }

    async declineRequest(id: string) {
        return this.rest.post(`/friends/${id}/decline`, {});
    }
}