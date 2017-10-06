const assert = require('chai').assert;
const app = require('../app');
//const sayHello = require('../app').sayHello;

let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5,5);

describe('App', function() {
  describe('sayHello', function() {
    it('app should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  })

  describe('addNumbers', function() {
    it('addNumbers should return 10', function() {
      assert.equal(addNumbersResult, 10);
    });

    it('addNumbers should return number', function() {
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
