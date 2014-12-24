Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
}

'c' + 'a' + 't' === 'cat'
'cat'.toUpperCase() == "CAT"


// What is falsy?

// false
// null
// undefined
// ''
// 0
// NaN

// Everything else is truthy!


// Operators

// . [] ()
// delete, new, typeof + - !
// * / % + -
// >= <= > < === !==
// && || ?:


// typeof produces 'number', 'string', 'boolean', 'undefined', 'function', 'object'
// for `array` and `null` typeof is 'object'

//////  Literals

// number, string, object, array, function, regexp


// Arrays, functions, regexps are objects
// Objects are class-less


// Object literal

var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

stooge["first-name"]
stooge["FIRST-NAME"]

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
	IATA: "SYD",
	time: "2004-09-22 14:55",
	city: "Sydney"
    },
    arrival: {
	IATA: "LAX",
	time: "2004-09-23 10:42",
	city: "Los Angeles"
    }
};

flight.departure.IATA
flight.status

// default values with ||

var middle = stooge["midle-name"] || "(none)";
var status = flight.status || 'unknown';

// Gaurding against retriving from undefined  with &&

var model = flight.equipment && flight.equipment.model

// Reference

var a = {}, b = {}, c = {}; // different empty objects
a = b = c = {}; // same empty object

//// Prototype

// Every object is linked to a prototype.  Primordial parent of every
// object is `Object.prototype`

// Create an object from another object

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
	var F = function () {};
	F.prototype = o;
	return new F();
    };
}
var another_stooge = Object.create(stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = "Moses";
another_stooge.nickname = 'Moe';

// If you add a new property to a prototype, that will
// be visible in all of he objects

stooge.profession = 'actor';
another_stooge.profession //=> 'actor'

another_stooge.hasOwnProperty('profession') // false


//// Delete

delete another_stooge.nickname // will not delete in prototype chain


// avoid littering globals. Bring them into single place if you can't avoid


var MYAPP = {};

MYAPP.config = {
    "tenant-id": "ibm",
    "app-url": "http://ibm.mysaas.com",
    "rest-url": "http://api.mysaas.com",
    "user": {
	"user-id": "employee-1",
	"is-mobile-access-allowed": true
    }
};

// Function Literal

// This is anonymous function
var add = function (a,b) { 
    return a+b;
};

// Every function receives hidden arguments `this` and `arguments`

// When a function is stored as a property of an object, we call it
// method.  When a method is invoked, `this` is bound to that object.

var obj = {
    value: 0,
    increment: function (inc) {
	this.value += typeof inc === 'number'? inc : 1;
    }
};

obj.increment();
console.log(obj); //1

obj.increment(2);
console.log(obj); //3

// When a function is not property of an object, then it is global object method and `this` will be set to this global object. 

obj1.double = function() {
    var that = this;

    var helper  = function () {
	that.value = add(that.value, that.value);
    };
    helper();
};

obj1.double();
console.log(obj1);


// Constructor Invocation pattern

var Quo = function (string) {
    this.status = string;
};
Quo.prototype.getStatus = function() {
    return this.status;
};

var myQuo = new Quo("Confused");
console.log(myQuo.getStatus());

// Apply invocation pattern

// .apply()

// Exceptions

var add = function (a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
	throw {
	    name: 'TypeError',
	    message: 'add needs numbers'
	};
    }
    return a + b;
}

var addit = function() {
    try {
	add('seven');
    } catch (e) {
	console.log(e.message);
    }
}
addit();

// Augmenting Types

Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};


Number.method('integer', function() {
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
console.log((-10/3).integer());

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});
console.log("  dsfd    ".trim());


//// Recursion


//// Closure

