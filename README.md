# Node Web App
It's a simple NodeJS Web app with Babel, Gulp, Sass and Express.

### What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

* Transform syntax
* Polyfill features that are missing in your target environment (through @babel/polyfill)
* Source code transformations (codemods)
* And more! (check out these videos for inspiration)

### What is Gulp? 
It is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization, etc.

### What is Express?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Scripts

* *npm run start* : Run the application on bin/dev using babel-register
* *npm run build* : Use babel to compile the server/ into dist/

### Depedencies

```json
  "dependencies": {
    "express": "^4.16.3",
    "gulp-uglifycss": "^1.1.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.26.0",
    "gulp": "^4.0.0",
    "gulp-sass": "^4.0.1",
    "nodemon": "^1.18.4"
  }
```

### License
MIT License - see the [LICENSE.md](LICENSE.md) for more details.