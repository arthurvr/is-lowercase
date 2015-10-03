import test from 'ava';
import isLowercase from './';

test('should test if a string is lowercase', t => {
	t.true(isLowercase('unicorns'));
	t.true(isLowercase('a'));
	t.true(isLowercase('1'));
	t.true(isLowercase('💩'));

	t.false(isLowercase('Unicorns'));
	t.false(isLowercase('unicOrns'));
	t.false(isLowercase('A'));

	t.end();
});

test('should throw when passing non-string input', t => {
	[null, undefined, 23].forEach(input => {
		t.throws(() => {
			isLowercase(input);
		});
	});

	t.end();
});
