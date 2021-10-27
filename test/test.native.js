/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils-try-require' );
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );


// VARIABLES //

var addon = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( addon instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof addon, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( value, x, 1, y, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, value, 1, y, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, value, y, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( y.length, x, 1, value, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, 1, y, value, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a Uint8Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( m.length, x, 1, y, 1, value, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, 1, y, 1, m, value, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( z.length, x, 1, y, 1, m, 1, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a ninth argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, 1, y, 1, m, 1, z, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float32Array( [] ),
		new Float32Array( [ 1.0 ] ),
		new Float32Array( [ 1.0, 2.0 ] ),
		new Float32Array( [ 1.0, 2.0, 3.0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = new Float32Array( 10 );
			var z = new Float32Array( y.length );
			var m = new Uint8Array( y.length );
			addon( y.length, value, 1, y, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float32Array( [] ),
		new Float32Array( [ 1.0 ] ),
		new Float32Array( [ 1.0, 2.0 ] ),
		new Float32Array( [ 1.0, 2.0, 3.0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var z = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, 1, value, 1, m, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Uint8Array( [] ),
		new Uint8Array( [ 0 ] ),
		new Uint8Array( [ 0, 0 ] ),
		new Uint8Array( [ 0, 0, 1 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var z = new Float32Array( x.length );
			addon( x.length, x, 1, y, 1, value, 1, z, 1 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which has insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		new Float32Array( [] ),
		new Float32Array( [ 1.0 ] ),
		new Float32Array( [ 1.0, 2.0 ] ),
		new Float32Array( [ 1.0, 2.0, 3.0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float32Array( 10 );
			var y = new Float32Array( x.length );
			var m = new Uint8Array( x.length );
			addon( x.length, x, 1, y, 1, m, 1, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', opts, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		addon();
	}
});

tape( 'the function throws an error if provided too many arguments', opts, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float32Array( 10 );
		var y = new Float32Array( x.length );
		var z = new Float32Array( x.length );
		var m = new Uint8Array( x.length );
		addon( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0 );
	}
});

tape( 'the function does not throw an error when provided valid arguments', opts, function test( t ) {
	var x;
	var y;
	var z;
	var m;

	x = new Float32Array( 10 );
	y = new Float32Array( x.length );
	z = new Float32Array( x.length );
	m = new Uint8Array( x.length );

	try {
		addon( x.length, x, 1, y, 1, m, 1, z, 1 );
		t.ok( true, 'does not throw' );
	} catch ( err ) {
		t.ok( false, err.message );
	}
	t.end();
});
