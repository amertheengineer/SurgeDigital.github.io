{
<<<<<<< HEAD
  "name": "uptimize",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.5.0",
    "@material-ui/icons": "^4.4.3",
    "@material-ui/lab": "^4.0.0-alpha.28",
    "@mdi/js": "^4.5.95",
    "bootstrap": "^4.3.1",
    "material-ui": "^0.20.2",
    "react": "^16.10.2",
    "react-animate-on-scroll": "^2.1.5",
    "react-animated-number": "^0.4.4",
    "react-bootstrap": "^1.0.0-beta.14",
    "react-collapsible": "^2.6.0",
    "react-dom": "^16.10.2",
    "react-lazyload": "^2.6.2",
    "react-resize-aware": "^3.0.0-beta.6",
    "react-scripts": "3.2.0",
    "react-scroll-parallax": "^2.2.0",
    "react-spring": "^8.0.27",
    "reactstrap": "^8.0.1",
    "redux-form": "^8.2.6",
    "styled-components": "^4.4.0",
    "survey-react": "^1.1.14",
    "sweetalert2": "^8.18.0"
  },
=======
  "name": "uptimize_server",
  "version": "1.0.0",
  "description": "The server for Uptimize",
  "main": "server.js",
>>>>>>> reactWebsite
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "server": "nodemon server.js",
      "front-end": "npm run start --prefix client",
      "dev": "concurrently \"yarn server\" \"yarn front-end\""
  },
  "author": "Wade Smith - Dux",
  "license": "MIT",
  "dependencies": {
    "@sendgrid/mail": "^6.4.0",
    "body-parser": "^1.19.0",
    "concurrently": "^5.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.7.5",
    "morgan": "^1.9.1",
    "request": "^2.88.0"
  },
  "devDependencies": {
    "nodemon": "^1.19.4"
  }
}
