/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
eval("var coll = document.getElementsByClassName(\"collapsible\");\nvar i;\n\nfor (i = 0; i < coll.length; i++) {\n  coll[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n    var content = this.nextElementSibling;\n\n    if (content.style.display === \"block\") {\n      content.style.display = \"none\";\n    } else {\n      content.style.display = \"block\";\n    }\n  });\n}\n\n//# sourceURL=webpack://sf_drive/./src/js/index.js?");
/******/ })()
;