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

var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var resolveGetter = require( '@stdlib/array-base-resolve-getter' );


// FUNCTIONS //

/**
* Counts the number of elements in an indexed array which pass a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - predicate function
* @param {*} thisArg - predicate function evaluation context
* @returns {NonNegativeInteger} result
*
* @example
* function predicate( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = indexed( x, predicate, {} );
* // returns 3
*/
function indexed( x, predicate, thisArg ) {
	var n;
	var i;

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( predicate.call( thisArg, x[ i ], i, x ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of elements in an accessor array which pass a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - predicate function
* @param {*} thisArg - predicate function evaluation context
* @returns {NonNegativeInteger} result
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
*
* function predicate( value ) {
*     return ( value > 0 );
* }
*
* var x = toAccessorArray( [ 0, 1, 0, 1, 1 ] );
*
* var n = accessors( x, predicate, {} );
* // returns 3
*/
function accessors( x, predicate, thisArg ) {
	var get;
	var n;
	var i;

	get = resolveGetter( x );

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( predicate.call( thisArg, get( x, i ), i, x ) ) {
			n += 1;
		}
	}
	return n;
}


// MAIN //

/**
* Counts the number of elements in an array which pass a test implemented by a predicate function.
*
* @param {Collection} x - input array
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - predicate function evaluation context
* @returns {NonNegativeInteger} result
*
* @example
* function predicate( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = countIf( x, predicate );
* // returns 3
*/
function countIf( x, predicate, thisArg ) {
	if ( isAccessorArray( x ) ) {
		return accessors( x, predicate, thisArg );
	}
	return indexed( x, predicate, thisArg );
}


// EXPORTS //

module.exports = countIf;
