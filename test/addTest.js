const assert = require('chai').assert;
const add = require('../add');

describe('Add', function() {

  let result = add(5);

  it('Should add 5 and return 10', function() {
    //let result = add(5);
    assert.equal(result, 10);
  })

  it('Should return type number', function() {
    //let result = add(5);
    assert.typeOf(result, 'number');
  })
})
