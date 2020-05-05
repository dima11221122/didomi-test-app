# Didomi Test App
![Didomi Test App CI](https://github.com/dima11221122/didomi-test-app/workflows/Didomi%20Test%20App%20CI/badge.svg)

It's my solution for [Didomi code challenge](https://github.com/didomi/challenges/tree/master/frontend). The app is available on [Github Pages](https://dima11221122.github.io/didomi-test-app/app/).

### Key features :key:

- Thoroughly tested. ~80 tests, ~90% code coverage :lock:
- Front-end level mocks of http-request, using my package [ngx-mock-server](https://www.npmjs.com/package/ngx-mock-server) (yes, it can be effortlessly deployed as a static website on Github Pages :palm_tree: . [And it is](https://dima11221122.github.io/didomi-test-app/app/)!)
- Handy [Compodoc](https://www.npmjs.com/package/@compodoc/compodoc) documentation. Do you not want to generate the latest version of the documentation manually? [Check it out online](https://dima11221122.github.io/didomi-test-app/docs/)! :green_book:
- Running tests and app deployment on push via Github Actions :ant:
- Project rely on the latest version of Angular (9.1.4) and NgRx :new:

## Setup

I think you'll do it with your eyes closed) :zzz: 

- Install Node.js (Angular requires [a current, active LTS, or maintenance LTS](https://nodejs.org/about/releases/) version of Node.js)
- Run `npm install` in the root of the project
- Run `npm start` in the root of the project
- Open `http://localhost:4200` in a browser
- Enjoi! :)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Generate documentation

Run `npm run compodoc` to generate documentation via [Compodoc](https://www.npmjs.com/package/@compodoc/compodoc). The documentation will be stored in the `dist/docs` directory.
