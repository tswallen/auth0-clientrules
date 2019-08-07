# auth0 Client Rules - Configuration

[Back to contents](../README.md)

## Authentication

The sample needs to be configured with your Auth0 domain and client ID in order to work. In the root of the sample, copy `auth_config.json.example` and rename it to `auth_config.json`. Open the file and replace the values with those from your Auth0 tenant:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>",
  "audience": "<YOUR AUTH0 API AUDIENCE IDENTIFIER>",
  "token": "<YOUR AUTH0 API TOKEN>"
}
```

## auth0 Environment

Both the *audience* and *token* must be retrieved from the *APIs* section of auth0. Learn more [here](https://auth0.com/docs/api/management/v2/tokens).

## Local Environment

[Node.js](https://nodejs.org) and [Angular CLI](https://cli.angular.io) must be installed on your machine for this project.
