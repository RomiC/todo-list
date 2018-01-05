(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(1);
var index_1 = __webpack_require__(2);
var app = express();
var PORT = process.env.PORT || 3000;
// GraphiQL, a visual editor for queries
app.use('/graphql', index_1.default);
// Start the server
app.listen(PORT, function () { return console.log("Go to http://localhost:" + PORT + "/graphiql to run queries!"); });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphqlHTTP = __webpack_require__(3);
var graphql_1 = __webpack_require__(4);
var todos = [
    {
        id: 1,
        label: 'walk with dog',
        complete: false
    },
    {
        id: 2,
        label: 'got to bed children',
        complete: false
    }
];
var rootValue = {
    todos: function (_a) {
        var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.label, label = _c === void 0 ? null : _c, _d = _a.complete, complete = _d === void 0 ? null : _d;
        return todos.filter(function (todo) {
            return (id === null || todo.id === id) &&
                (label === null || todo.label.indexOf(label) >= 0) &&
                (complete === null || todo.complete === complete);
        });
    },
    addTodo: function (_a) {
        var _b = _a.label, label = _b === void 0 ? null : _b;
        todos.push({
            id: todos[todos.length - 1].id + 1,
            label: label,
            complete: false
        });
        return todos[todos.length - 1];
    }
};
var schema = graphql_1.buildSchema("\n  type Todo {\n    id: Int,\n    label: String,\n    complete: Boolean\n  }\n  type Query {\n    todos(id: Int, label: String, complete: Boolean): [Todo]\n  }\n  type Mutation {\n    addTodo(label: String): Todo\n  }\n");
exports.default = graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ })
/******/ ])));
//# sourceMappingURL=server.js.map