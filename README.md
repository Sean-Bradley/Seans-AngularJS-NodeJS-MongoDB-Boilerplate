# Seans AngularJS <-> NodeJS <-> MongoDB Boilerplate

Also comes with Mocha and Chai test scripts for testing the nodejs application
Also comes with Protractor and Jasmine for e2e testing of the Angular application

*This project depends on MongoDB. You will need to pre install it to your local machine from* https://docs.mongodb.com/manual/installation/

## Install

`git clone https://github.com/Sean-Bradley/Seans-AngularJS-NodeJS-MongoDB-Boilerplate.git`

`npm install`

## Starting

`npm start` 

or 

`nodemon start.js` if you prefer to have the nodejs server auto restart after file changes.

## Developing

If you are developing the code,
you will also need to open a second console and run 

`gulp watch`

This will automatically,
- detect changes in the source files, 
- run tests on the files using mocha and chai,
- compile them from ES6 to ES5 Javascript using babel, 
- concatenate the js using gulp-concat,
- and minify the js using gulp-uglify,
- and copy the new scripts and html to the public `www` folder

All the AngularJS specific files should be edited from the `ngSrc` folder.
Any changes will be tested, recompiled and automatically saved to the public `www` folder.

## e2e Testing

There is also the option to do e2e testing with protractor and jasmine.

Before you start, you need to install protractor

`npm install -g protractor`

then, update the web driver

`npm run update-webdriver`

Now you can run

`npm run protractor`

To see the e2e user interface tests.
