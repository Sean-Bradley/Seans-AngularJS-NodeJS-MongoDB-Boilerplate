# Seans AngularJS <-> NodeJS <-> MongoDB Boilerplate

Also comes with testing framemork.

To install
`git clone ...`

`npm install`

`npm start`

## Developing

If you are developing the code,
you will also need to run 
`gulp watch`
This will,
- detect changes in the source files, 
- run tests on the files using mocha and chai,
- compile them from ES6 to Javascript using babel, 
- concatenate the js using gulp-concat,
- and minify the js using gulp-uglify,
- and copy the new scripts and html to the public `www` folder



