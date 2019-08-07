# auth0 Client Rules

## Getting started

1. Run `npm install`
2. Run `npm run dev`
3. Navigate to [http://localhost:3000/](http://localhost:3000/)

## Configuration

The sample needs to be configured with your Auth0 domain and client ID in order to work. In the root of the sample, copy `auth_config.json.example` and rename it to `auth_config.json`. Open the file and replace the values with those from your Auth0 tenant:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>",
  "audience": "<YOUR AUTH0 API AUDIENCE IDENTIFIER>",
  "token": "<YOUR AUTH0 API TOKEN>"
}
```
