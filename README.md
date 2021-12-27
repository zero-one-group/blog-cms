# blog-cms

A blog CMS 📄 using Nx, React, and Fastify.

This project was generated using [Nx](https://nx.dev).

## Generate an application

Run `nx g @nrwl/react:app <your-app-name>` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib <your-lib-name>` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@cms-blog/<your-lib-name>`.

## Development server

Execute `nx serve cms-frontend` for running cms-frontend project. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component <your-component-name> --project=<app-name>` to generate a new component.
example:
```
yarn nx g @nrwl/react:component password-field --project=cmslib-frontend-ui --dir=lib/fields  
```

## Build

Run `nx build <app-name>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test <app-name>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e <app-name>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
