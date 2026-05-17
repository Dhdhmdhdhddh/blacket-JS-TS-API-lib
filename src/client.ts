import { RestClient } from "./rest/RestClient";
import { BlooksClient } from "./rest/blooks";

export class BlacketClient {
    private rest: RestClient;
    public blooks: BlooksClient;
    private baseUrl: string = "https://blacket.org";

    constructor(options: { token: string }) {
        this.rest = new RestClient();
        this.rest.setToken(options.token);
        this.blooks = new BlooksClient(this.rest);
    }
}