import { expect } from 'chai';
import Cat from '../models/cat.js';

import assert from 'assert';

describe('Tests on the Cat Model', _ => {
    it('should create a new Cat Object', () => {
        let result = new Cat();
        expect(result instanceof Object).to.equal(true);
    })
    it('default cat name should be ""', () => {
        let cat = new Cat();
        let result = cat.name;
        expect(result).to.equal("");
    })
    it('default cat should be hungry', () => {
        let cat = new Cat();
        let result = cat.isHungry;
        expect(result).to.equal(true);
    })
    it('cat genus is felis', () => {
        let cat = new Cat();
        let result = cat.genus;
        expect(result).to.equal("felis");
    })
})


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
