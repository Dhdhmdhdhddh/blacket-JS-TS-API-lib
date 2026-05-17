import { RestClient } from "./rest/RestClient";
import { BlooksClient } from "./rest/blooks";
import { UserClient } from "./rest/user";
import { AuthClient } from "./rest/auth";
import { MarketClient } from "./rest/market";
import { TokensClient } from "./rest/tokens";
import { LeaderboardClient } from "./rest/leaderboard";
import { FriendsClient } from "./rest/friends";
import { AuctionsClient } from "./rest/auctions";

type ClientOptions = 
    | { token: string }
    | { username: string; password: string };

export class BlacketClient {
    private rest: RestClient;
    public auth: AuthClient;
    public blooks: BlooksClient;
    public user: UserClient;
    public market: MarketClient;
    public tokens: TokensClient;
    public leaderboard: LeaderboardClient;
    public friends: FriendsClient;
    public auctions: AuctionsClient;

    constructor(options?: ClientOptions) {
        this.rest = new RestClient();
        this.auth = new AuthClient(this.rest);
        this.blooks = new BlooksClient(this.rest);
        this.user = new UserClient(this.rest);
        this.market = new MarketClient(this.rest);
        this.tokens = new TokensClient(this.rest);
        this.leaderboard = new LeaderboardClient(this.rest);
        this.friends = new FriendsClient(this.rest);
        this.auctions = new AuctionsClient(this.rest);

        if (options && "token" in options) {
            this.rest.setToken(options.token);
        }
    }

    async login(username: string, password: string) {
        const result = await this.auth.login(username, password);
        if (result.token) this.rest.setToken(result.token);
        return result;
    }
}