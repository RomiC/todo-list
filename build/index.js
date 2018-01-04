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
const express = __webpack_require__(1);
const index_1 = __webpack_require__(2);
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/', express.static('build/assets'));
app.use('/graphql', index_1.default);
// Start the server
app.listen(PORT, () => console.log(`App is running http://localhost:${PORT}/!`));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const graphqlHTTP = __webpack_require__(3);
const graphql_1 = __webpack_require__(4);
const todos = [
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
const rootValue = {
    todos: ({ id = null, label = null, complete = null }) => todos.filter((todo) => (id === null || todo.id === id) &&
        (label === null || todo.label.indexOf(label) >= 0) &&
        (complete === null || todo.complete === complete)),
    addTodo: ({ label = null }) => {
        todos.push({
            id: todos[todos.length - 1].id + 1,
            label,
            complete: false
        });
        return todos[todos.length - 1];
    }
};
const schema = graphql_1.buildSchema(`
  type Todo {
    id: Int,
    label: String,
    complete: Boolean
  }
  type Query {
    todos(id: Int, label: String, complete: Boolean): [Todo]
  }
  type Mutation {
    addTodo(label: String): Todo
  }
`);
exports.default = graphqlHTTP({
    schema,
    rootValue,
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
//# sourceMappingURL=index.js.map