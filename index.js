// CJS - CommonJS
// ---------------------------------------------------------------
//importing 
const doSomething = require('./doSomething.js'); 

//exporting
module.exports = function doSomething(n) {
  // do something
}

// AMD - Asynchronous Module Definition
// ---------------------------------------------------------------
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});

// or

// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    return function () {};
});

// UMD - Universal Module Definition
// ---------------------------------------------------------------
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));

// SJS - SystemJS
// ---------------------------------------------------------------
// exporting or defining
var myUtilsModule = function (n) {
  var myMethod = function(){
    // your module's code
  }

  return {
    myMethod: myMethod
  }
}()

System.import('path/to/main.js').then(function(){
  myMethod();
})

// IIFE - Immediately Invoked Function Expression
// ---------------------------------------------------------------
import React from 'react';

import {foo, bar} from './myLib';

...

export default function() {
  // your Function
};
export const function1() {...};
export const function2() {...};

// ESM - ECMAScript Module
// ---------------------------------------------------------------
var myPersonalInfoModule = function () {

        // those variables are private and are not accessible from outside
        let name = "Mary";
        let surname  = "Mcfly";

        // those methods are private and are not accessible from outside
        function concatenateName() {
            return `${name} ${surname}`
        }

        function printName(){
          console.log(concatenateName())
        }
        
        function setName( newName ) {
            name = newName;
        }

        function setSurname( newSurname ) {
            surname = newSurname;
        }

        // this way we expose those variables and methods we want
        return {
            setName: setName,
            setSurname: setSurname,
            printFullName: printName
        };

    }();

// example of use
myPersonalInfoModule.setName( "Doc" );
myPersonalInfoModule.setSurname( "Brown" );
