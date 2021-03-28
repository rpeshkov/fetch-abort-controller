# AbortController test

Playing around with [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Usage

- Clone
- `npm install`
- `npm start`
- Open http://localhost:8080 in the browser

Clicking on "Fetch" button sends request to `/api` endpoint, which has 10 seconds timeout for response. Clicking "Abort" - cancels the request if it's still pending.

## License

MIT
