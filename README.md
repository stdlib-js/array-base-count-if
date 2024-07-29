<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# countIf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Count the number of elements in an array which pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import countIf from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-count-if@v0.1.1-deno/mod.js';
```

#### countIf( x, predicate\[, thisArg] )

Counts the number of elements in an array which pass a test implemented by a predicate function.

```javascript
function predicate( value ) {
    return ( value > 0 );
}

var x = [ 0, 1, 0, 1, 2 ];

var out = countIf( x, predicate );
// returns 3
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
function predicate( value ) {
    this.count += 1;
    return ( value > 0 );
}

var x = [ 0, 1, 0, 1, 2 ];

var context = {
    'count': 0
};

var out = countIf( x, predicate, context );
// returns 3

var cnt = context.count;
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
var isPositiveInteger = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer' ).isPrimitive;
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import countIf from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-count-if@v0.1.1-deno/mod.js';

var x = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
// returns <Int32Array>

var out = countIf( x, naryFunction( isPositiveInteger, 1 ) );
// returns <number>

console.log( x );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-count-if.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-count-if

[test-image]: https://github.com/stdlib-js/array-base-count-if/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/array-base-count-if/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-count-if/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-count-if?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-count-if.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-count-if/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-count-if/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-count-if/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-count-if/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-count-if/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-count-if/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-count-if/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-count-if/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-count-if/main/LICENSE

</section>

<!-- /.links -->
