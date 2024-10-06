# analytics

this is a small prototype to collect several analytical metrics from a users visit and send them to an express server.
the tracking-script that collects those metrics is around 804 bytes big (0.804 kb!!).

## installation

```bash
bun install
```

## how to use

1. start the express server

```bash
bun run s.js
```

2. open index.html in your browser and allow the geolocation tracking popup.

3. you should see the visitors data in the console output of the express server.