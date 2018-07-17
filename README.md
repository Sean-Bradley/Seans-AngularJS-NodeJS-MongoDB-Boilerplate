# Seans AngularJS <-> NodeJS <-> MongoDB Boilerplate

Comes With tests
- Mocha and Chai test scripts for testing the nodejs models
- Chai-Http for testing the nodejs routes
- Protractor e2e and Jasmine tests for the AngularJS UI

And
- Auto concat using Gulp Concat
- Minify using Gulp Uglify
- ES6 to ES5 conversion using Babel
- and deploy to public www folder using Gulp
- csrf prevention using csurf
- now uses docker-compose 


## Install

`git clone https://github.com/Sean-Bradley/Seans-AngularJS-NodeJS-MongoDB-Boilerplate.git`

`cd Seans-AngularJS-NodeJS-MongoDB-Boilerplate`

`cd nodejs`

`npm install`

## Starting

`cd ..`  *cd back to project root*

`docker-compose up`

This was set up using docker toolbox on windows 10,
Site will be available at http://192.168.99.100
View using chrome or firefox since edge browser cannot see VirtualBox hosted websites locally.


## Developing

If you are developing the code,
you will also need to open a second console and run 

`cd nodejs`

`gulp watch`

This will automatically,
- detect changes in the source files, 
- run tests on the files using mocha and chai,
- compile them from ES6 to ES5 Javascript using babel, 
- concatenate the js using gulp-concat,
- and minify the js using gulp-uglify,
- and copy the new scripts and html to the public `www` folder

All the AngularJS specific files should be edited from the `ngSrc` folder.
Any changes will be automatically tested, recompiled, minified and saved to the public `www` folder.

## e2e Testing

There is also the option to do e2e testing with protractor and jasmine.

Before you start, you need to install protractor

`cd nodejs`

`npm install -g protractor`

then, update the web driver

`npm run update-webdriver`

Now you can run

`npm run protractor`

