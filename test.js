'use strict';
var test = require('ava');
var isLowercase = require('./');

test('should test if a string is lowercase', function (t) {
	t.true(isLowercase('unicorns'));
	t.true(isLowercase('a'));
	t.true(isLowercase('1'));
	t.true(isLowercase('💩'));

	t.false(isLowercase('Unicorns'));
	t.false(isLowercase('unicOrns'));
	t.false(isLowercase('A'));

	t.end();
});

test('should throw when passing non-string input', function (t) {
	[function () {}, null, undefined, 23].forEach(function (input) {
		t.throws(function () {
			isLowercase(input);
		});
	});

	t.end();
});
