/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Int32Array = require( '@stdlib/array-int32' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var countIf = require( './../lib' );


// FUNCTIONS //

/**
* Predicate function.
*
* @private
* @param {number} value - value
* @returns {boolean} boolean indicating whether a value passes a test
*/
function predicate( value ) {
	return ( value > 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof countIf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function counts the number of elements which pass a test implemented by a predicate function (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 0, 1, 0, 1, 2 ];
	actual = countIf( x, predicate );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements which pass a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 0, 1, 0, 1, 2 ] );
	actual = countIf( x, predicate );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements which pass a test implemented by a predicate function (real typed array)', function test( t ) {
	var actual;
	var x;

	x = new Int32Array( [ 0, 1, 0, 1, 2 ] );
	actual = countIf( x, predicate );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();
});

tape( 'the function counts the number of elements which pass a test implemented by a predicate function (complex typed array)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 4.0, 0.0, 5.0 ] );
	actual = countIf( x, predicate );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();

	function predicate( value ) {
		return (
			real( value ) > 0 &&
			imag( value ) > 0
		);
	}
});

tape( 'the function returns `0` if provided an array having zero elements', function test( t ) {
	var actual;
	var x;

	x = [];
	actual = countIf( x, predicate );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = toAccessorArray( [] );
	actual = countIf( x, predicate );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = new Int32Array( [] );
	actual = countIf( x, predicate );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = new Complex128Array( [] );
	actual = countIf( x, predicate );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0` if no elements pass a test implemented by a predicate function (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 0, 0, 0, 0 ];
	actual = countIf( x, predicate );

	t.strictEqual( actual, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` if no elements pass a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 0, 0, 0, 0 ] );
	actual = countIf( x, predicate );

	t.strictEqual( actual, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the number of elements in an array if all elements pass a test implemented by a predicate function (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 1, 1, 1 ];
	actual = countIf( x, predicate );

	t.strictEqual( actual, x.length, 'returns expected value' );
	t.end();
});

tape( 'the function returns the number of elements in an array if all elements pass a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1, 1, 1, 1 ] );
	actual = countIf( x, predicate );

	t.strictEqual( actual, x.length, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a custom execution context (generic)', function test( t ) {
	var context;
	var actual;
	var x;

	x = [ 0, 1, 0, 1, 1 ];
	context = {
		'count': 0
	};
	actual = countIf( x, predicate, context );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.strictEqual( context.count, x.length, 'returns expected value' );
	t.end();

	function predicate( value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( value > 0 );
	}
});

tape( 'the function supports providing a custom execution context (accessors)', function test( t ) {
	var context;
	var actual;
	var x;

	x = toAccessorArray( [ 0, 1, 0, 1, 1 ] );
	context = {
		'count': 0
	};
	actual = countIf( x, predicate, context );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.strictEqual( context.count, x.length, 'returns expected value' );
	t.end();

	function predicate( value ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( value > 0 );
	}
});
