export class RestClient {
    private baseUrl: string = "https://blacket.org";
    private token: string = "";

    setToken(token: string) {
        this.token = token;
    }

    async get(endpoint: string) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            headers: {
                "Cookie": `blackettoken=${this.token}`
            }
        });
        return response.json();
    }

    async post(endpoint: string, body: object) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${this.token}`
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }
}