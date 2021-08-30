## SPG assignment

This project contains two packages client and server which will be handled with `lerna`.

### Client

Client folder contains simple `CRA` application with `containers` and `components` folder.

Components folder holds some pure components without any side-effects.

Containers folder holds application context and components which has been created by the composition of small components.

### Install

Please run this command to prepare the environment. `run npm bootstrap`

### Development Mode

Run application in development mode with `npm run development`.
Front-End application is accessible on http://localhost:3001/.

### production Mode

Incase of using service-workers on the front-end application you can run application on production mode.
`npm run production`

Front-End application is accessible on http://localhost:3002/.
