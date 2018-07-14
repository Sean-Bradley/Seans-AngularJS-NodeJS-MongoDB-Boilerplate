import { expect } from 'chai';
import Cat from '../models/cat.js';

import assert from 'assert';

describe('Tests on the Cat Model', _ => {
    let cat = new Cat();
    it('should create a new Cat Object', () => {
        expect(cat instanceof Object).to.equal(true);
    })
    it('default cat name should be ""', () => {
        expect(cat.name).to.equal("");
    })
    it('default cat should be hungry', () => {
        expect(cat.isHungry).to.equal(true);
    })
    it('cat genus is felis', () => {
        expect(cat.genus).to.equal("felis");
    })
    it('change the cats name to Cosmo', () => {
        cat.name = "Cosmo";
        assert.equal(cat.name, "Cosmo");
    })
    it('The cats latest fed date is a date object', () => {
        expect(cat.lastFedDate instanceof Date).to.equal(true);
    })
    it('The cats latest fed date should still be date object after modification', () => {
        cat.lastFed += 1000;
        expect(cat.lastFedDate instanceof Date).to.equal(true);
    })
})


//import catsService from '../ngSrc/services/catsService.js';
//console.dir(catsService);
// describe('Basic Mocha String Test', function () {
//     it('should return number of characters in a string', function () {
//         assert.equal("Hello".length, 5);
//     });
//     it('should return first character of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });

// describe('this is a description for the logincomntroler bit', function () {
//     it('should return true if valid user id', function () {
//         var isValid = loginController.isValidUserId(['abc123', 'xyz321'], 'abc123')
//         assert.equal(isValid, true);
//     });
// })


// describe('async test', function () {
//     it('should return true if valid user id', function (done) {
//         loginController.isValidUserIdAsync(['abc123', 'xyz321'], 'abc123',
//             function (isValid) {
//                 assert.equal(isValid, true);
//                 done();
//             });
//     });
// })
