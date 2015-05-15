'use strict';
var assert = require('assert');
var isLowercase = require('./');

it('should test if a string is lowercase', function () {
	assert(isLowercase('unicorns'));
	assert(!isLowercase('Unicorns'));
	assert(!isLowercase('unicOrns'));
	assert(!isLowercase('A'));
	assert(isLowercase('a'));
	assert(isLowercase('1'));
	assert(isLowercase('💩'));
});

it('should throw when passing non-string input', function () {
	[function () {}, null, undefined, 23].forEach(function (input) {
		assert.throws(function () {
			isLowercase(input);
		});
	});
});
