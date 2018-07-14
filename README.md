# Seans AngularJS <-> NodeJS <-> MongoDB Boilerplate

Also comes with the mocha chai testing framemwork.

*This project depends on MongoDB. You will need to pre install it to your local machine from* https://docs.mongodb.com/manual/installation/

## Install

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

You should edit the files in the ngSrc folder.
This is where all the angularjs specific files are stored.
Any changes will be tested, recompiled and automatically saved to the `www` folder

If you change files in the root folder, ie, the server.js or other settings files, you may need to re run `npm start` to see any changes.






