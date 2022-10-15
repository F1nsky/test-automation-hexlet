import { capitalize } from '../src/capitalize.js';
// import { strict as assert } from 'assert';
import assert from 'power-assert';


assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');
