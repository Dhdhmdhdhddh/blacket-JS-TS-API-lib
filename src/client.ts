import { RestClient } from "./rest/RestClient";
import { BlooksClient } from "./rest/blooks";
import { UserClient } from "./rest/user";

export class BlacketClient {
    private rest: RestClient;
    public blooks: BlooksClient;
    public user: UserClient;
    private baseUrl: string = "https://blacket.org";

    constructor(options: { token: string }) {
        this.rest = new RestClient();
        this.rest.setToken(options.token);
        this.blooks = new BlooksClient(this.rest);
        this.user = new UserClient(this.rest);
    }
}