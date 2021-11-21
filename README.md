# Learning Stripe

This is an Angular Project with Stripe. Its objective is being a base to develop something quickly.

## Setup

### .env file

Under the ".devcontainer" folder you should have (or create) an ".env" file with the following properties.

- (required) "STRIPE_SECRET_KEY" its value is the API Key from Stripe (you can get it in the dashboard)
- (required) "STRIPE_DEVICE_NAME" is a name to identify this container in your Stripe's dashboard.

### Angular start

In order to work with docker-compose Angular's serve command must be executed with "npm run start" in the frontend folder.
