# react-starter

A skeleton project for universal React applications.

## What's included

- Server side rendering with Express
- Routing with React Router
- State management with Redux
- Starter styles with Pup
- Tools for testing components and server side rendering

## Getting started

1. Clone this repo.

2. Create a `.env` file in the root directory of the repo.
  - You can create this file by copying `.env.example`.

3. Install dependencies with `npm install`.

## Developing

Start up a build script by running:

```
npm run develop
```

This will automatically rebuild front-end and server side assets on file change.

Once the build script has started, start the Express server by running:

```
npm run start/watch
```

The server will be restarted whenever server side assets are changed.

Visit [http://localhost:8080](http://localhost:8080) to see the React app in action.

The default port for the Express server is `8080`. This can be changed by updating
the `PORT` environment variable defined in `.env`

## Running tests

Run the test suite by running:

```bash
npm test
```

You can have tests run automatically on file change by running:

```
npm test/watch
```
