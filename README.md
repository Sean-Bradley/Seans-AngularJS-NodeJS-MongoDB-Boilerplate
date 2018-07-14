# Seans AngularJS <-> NodeJS <-> MongoDB Boilerplate

Also comes with the mocha chai testing framemwork.

To install

`git clone https://github.com/Sean-Bradley/Seans-AngularJS-NodeJS-MongoDB-Boilerplate.git`

`npm install`

`npm start`

## Developing

If you are developing the code,
you will also need to open a second console and run 

`gulp watch`

This will automatically,
- detect changes in the source files, 
- run tests on the files using mocha and chai,
- compile them from ES6 to Javascript using babel, 
- concatenate the js using gulp-concat,
- and minify the js using gulp-uglify,
- and copy the new scripts and html to the public `www` folder



