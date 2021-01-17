webpackHotUpdate_N_E("pages/index",{

/***/ "./utilities/cms.js":
/*!**************************!*\
  !*** ./utilities/cms.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process, module) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n\nvar _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n\nvar contentful = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n\nvar spaceId = process.env.SPACE_ID;\nvar envId = process.env.ENV_ID;\nvar accessToken = process.env.ACCESS_TOKEN;\n\nfunction getContentfulEntry(_x) {\n  return _getContentfulEntry.apply(this, arguments);\n}\n\nfunction _getContentfulEntry() {\n  _getContentfulEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(id) {\n    var client, data, dataKeyArray, cleanData, testData;\n    return _regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            client = contentful.createClient({\n              space: spaceId,\n              environment: envId,\n              // defaults to 'master' if not set\n              accessToken: accessToken\n            });\n            _context3.next = 3;\n            return client.getEntry(id).then(function (entry) {\n              // console.log('entry: ', entry);\n              return entry.fields;\n            })[\"catch\"](console.error);\n\n          case 3:\n            data = _context3.sent;\n            dataKeyArray = Object.keys(data);\n            cleanData = getDataIds('pageTitle', data);\n            console.log('cleanData: ', cleanData);\n            testData = dataKeyArray.map(function (key) {\n              return getDataIds(key, data);\n            });\n            console.log('testData: ', testData);\n            return _context3.abrupt(\"return\", data);\n\n          case 10:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getContentfulEntry.apply(this, arguments);\n}\n\nfunction getDataIds(key, data) {\n  var newObject = {};\n  newObject[key] = {\n    name: key,\n    data: data[key]\n  };\n  return newObject;\n}\n\nvar baseUrl = \"https://cdn.contentful.com/spaces/\".concat(spaceId, \"/environments/\").concat(envId);\n\nfunction getEntry(_x2) {\n  return _getEntry.apply(this, arguments);\n}\n\nfunction _getEntry() {\n  _getEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(id) {\n    var _pageContent$image, _pageContent$image$sy;\n\n    var url, res, content, pageContent, imageId, image;\n    return _regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            url = \"\".concat(baseUrl, \"/entries/\").concat(id, \"?access_token=\").concat(accessToken);\n            _context4.next = 3;\n            return fetch(url)[\"catch\"](function (error) {\n              console.error('There was an error: ', error);\n            });\n\n          case 3:\n            res = _context4.sent;\n            _context4.next = 6;\n            return res.json();\n\n          case 6:\n            content = _context4.sent;\n            pageContent = content.fields;\n            imageId = (_pageContent$image = pageContent.image) === null || _pageContent$image === void 0 ? void 0 : (_pageContent$image$sy = _pageContent$image.sys) === null || _pageContent$image$sy === void 0 ? void 0 : _pageContent$image$sy.id;\n            _context4.t0 = imageId;\n\n            if (!_context4.t0) {\n              _context4.next = 14;\n              break;\n            }\n\n            _context4.next = 13;\n            return getAsset(imageId);\n\n          case 13:\n            _context4.t0 = _context4.sent;\n\n          case 14:\n            image = _context4.t0;\n\n            // replace image data if found\n            if (image) {\n              pageContent.image = image;\n            }\n\n            return _context4.abrupt(\"return\", pageContent);\n\n          case 17:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getEntry.apply(this, arguments);\n}\n\nfunction getAsset(_x3) {\n  return _getAsset.apply(this, arguments);\n}\n\nfunction _getAsset() {\n  _getAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(id) {\n    var url, res, content, pageContent;\n    return _regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            url = \"\".concat(baseUrl, \"/assets/\").concat(id, \"?access_token=\").concat(accessToken);\n            _context5.next = 3;\n            return fetch(url)[\"catch\"](function (error) {\n              console.error('There was an error: ', error);\n            });\n\n          case 3:\n            res = _context5.sent;\n            _context5.next = 6;\n            return res.json();\n\n          case 6:\n            content = _context5.sent;\n            pageContent = content.fields;\n            return _context5.abrupt(\"return\", pageContent);\n\n          case 9:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _getAsset.apply(this, arguments);\n}\n\nvar childIds = [];\n\nfunction getPageContent(_x4) {\n  return _getPageContent.apply(this, arguments);\n} // async function to get data for children\n\n\nfunction _getPageContent() {\n  _getPageContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(id) {\n    var content, contentKeys, hasChildren, components;\n    return _regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return getEntry(id);\n\n          case 2:\n            content = _context6.sent;\n            contentKeys = Object.keys(content); // remove Entry Title from Contentful\n\n            contentKeys.splice(0, 1); // look to see if there are children\n\n            hasChildren = content.components.length > 0; // if there are children get data for them\n\n            if (!hasChildren) {\n              _context6.next = 13;\n              break;\n            }\n\n            content.components.map(function (component) {\n              var _component$sys;\n\n              // get the component id\n              var childId = (_component$sys = component.sys) === null || _component$sys === void 0 ? void 0 : _component$sys.id; // store the ids\n\n              childIds.push(childId);\n            }); // get component data\n\n            _context6.next = 10;\n            return getComponentData();\n\n          case 10:\n            components = _context6.sent;\n            // remove component object with only IDs\n            delete content.components; // replace components data\n\n            content.components = components;\n\n          case 13:\n            return _context6.abrupt(\"return\", {\n              content: content\n            });\n\n          case 14:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _getPageContent.apply(this, arguments);\n}\n\nvar getComponentData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(content) {\n    return _regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", Promise.all(childIds.map(function (item) {\n              return getChildEntryData(item);\n            })));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getComponentData(_x5) {\n    return _ref.apply(this, arguments);\n  };\n}(); // get the content out of the data\n\n\nvar getChildEntryContent = function getChildEntryContent(content) {\n  return {\n    componentName: content.componentName,\n    data: content\n  };\n}; // async function to get child entry data\n\n\nvar getChildEntryData = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(id) {\n    var content;\n    return _regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getEntry(id);\n\n          case 2:\n            content = _context2.sent;\n            return _context2.abrupt(\"return\", getChildEntryContent(content));\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getChildEntryData(_x6) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = {\n  getEntry: getEntry,\n  getAsset: getAsset,\n  getPageContent: getPageContent,\n  getContentfulEntry: getContentfulEntry\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0aWVzL2Ntcy5qcz8wYTYwIl0sIm5hbWVzIjpbImNvbnRlbnRmdWwiLCJyZXF1aXJlIiwic3BhY2VJZCIsInByb2Nlc3MiLCJlbnYiLCJTUEFDRV9JRCIsImVudklkIiwiRU5WX0lEIiwiYWNjZXNzVG9rZW4iLCJBQ0NFU1NfVE9LRU4iLCJnZXRDb250ZW50ZnVsRW50cnkiLCJpZCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwiZW52aXJvbm1lbnQiLCJnZXRFbnRyeSIsInRoZW4iLCJlbnRyeSIsImZpZWxkcyIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJkYXRhS2V5QXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiY2xlYW5EYXRhIiwiZ2V0RGF0YUlkcyIsImxvZyIsInRlc3REYXRhIiwibWFwIiwia2V5IiwibmV3T2JqZWN0IiwibmFtZSIsImJhc2VVcmwiLCJ1cmwiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjb250ZW50IiwicGFnZUNvbnRlbnQiLCJpbWFnZUlkIiwiaW1hZ2UiLCJzeXMiLCJnZXRBc3NldCIsImNoaWxkSWRzIiwiZ2V0UGFnZUNvbnRlbnQiLCJjb250ZW50S2V5cyIsInNwbGljZSIsImhhc0NoaWxkcmVuIiwiY29tcG9uZW50cyIsImxlbmd0aCIsImNvbXBvbmVudCIsImNoaWxkSWQiLCJwdXNoIiwiZ2V0Q29tcG9uZW50RGF0YSIsIlByb21pc2UiLCJhbGwiLCJpdGVtIiwiZ2V0Q2hpbGRFbnRyeURhdGEiLCJnZXRDaGlsZEVudHJ5Q29udGVudCIsImNvbXBvbmVudE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDJFQUFELENBQTFCOztBQUVBLElBQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQTVCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSCxPQUFPLENBQUNDLEdBQVIs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LGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFNQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2YvQyxVQUFRLEVBQVJBLFFBRGU7QUFFZjRCLFVBQVEsRUFBUkEsUUFGZTtBQUdmRSxnQkFBYyxFQUFkQSxjQUhlO0FBSWZwQyxvQkFBa0IsRUFBbEJBO0FBSmUsQ0FBakIiLCJmaWxlIjoiLi91dGlsaXRpZXMvY21zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKTtcblxuY29uc3Qgc3BhY2VJZCA9IHByb2Nlc3MuZW52LlNQQUNFX0lEO1xuY29uc3QgZW52SWQgPSBwcm9jZXNzLmVudi5FTlZfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVudGZ1bEVudHJ5KGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogc3BhY2VJZCxcbiAgICBlbnZpcm9ubWVudDogZW52SWQsIC8vIGRlZmF1bHRzIHRvICdtYXN0ZXInIGlmIG5vdCBzZXRcbiAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5cbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyeShpZClcbiAgICAudGhlbigoZW50cnkpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRyeTogJywgZW50cnkpO1xuXG4gICAgICByZXR1cm4gZW50cnkuZmllbGRzO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gIGNvbnN0IGRhdGFLZXlBcnJheSA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gIGNvbnN0IGNsZWFuRGF0YSA9IGdldERhdGFJZHMoJ3BhZ2VUaXRsZScsIGRhdGEpO1xuXG4gIGNvbnNvbGUubG9nKCdjbGVhbkRhdGE6ICcsIGNsZWFuRGF0YSk7XG5cbiAgY29uc3QgdGVzdERhdGEgPSBkYXRhS2V5QXJyYXkubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIGdldERhdGFJZHMoa2V5LCBkYXRhKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ3Rlc3REYXRhOiAnLCB0ZXN0RGF0YSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFJZHMoa2V5LCBkYXRhKSB7XG4gIGxldCBuZXdPYmplY3QgPSB7fTtcblxuICBuZXdPYmplY3Rba2V5XSA9IHtcbiAgICBuYW1lOiBrZXksXG4gICAgZGF0YTogZGF0YVtrZXldXG4gIH07XG5cbiAgcmV0dXJuIG5ld09iamVjdDtcbn1cblxuY29uc3QgYmFzZVVybCA9IGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHtzcGFjZUlkfS9lbnZpcm9ubWVudHMvJHtlbnZJZH1gO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVudHJ5KGlkKSB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9L2VudHJpZXMvJHtpZH0/YWNjZXNzX3Rva2VuPSR7YWNjZXNzVG9rZW59YDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3I6ICcsIGVycm9yKTtcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBwYWdlQ29udGVudCA9IGNvbnRlbnQuZmllbGRzO1xuXG4gIGNvbnN0IGltYWdlSWQgPSBwYWdlQ29udGVudC5pbWFnZT8uc3lzPy5pZDtcbiAgY29uc3QgaW1hZ2UgPSBpbWFnZUlkICYmIGF3YWl0IGdldEFzc2V0KGltYWdlSWQpO1xuXG4gIC8vIHJlcGxhY2UgaW1hZ2UgZGF0YSBpZiBmb3VuZFxuICBpZiAoaW1hZ2UpIHtcbiAgICBwYWdlQ29udGVudC5pbWFnZSA9IGltYWdlO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2VDb250ZW50O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBc3NldChpZCkge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hc3NldHMvJHtpZH0/YWNjZXNzX3Rva2VuPSR7YWNjZXNzVG9rZW59YDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3I6ICcsIGVycm9yKTtcbiAgfSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBwYWdlQ29udGVudCA9IGNvbnRlbnQuZmllbGRzO1xuXG4gIHJldHVybiBwYWdlQ29udGVudDtcbn1cblxuY29uc3QgY2hpbGRJZHMgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZUNvbnRlbnQoaWQpIHtcbiAgLy8gZ2V0IHBhZ2UgY29udGVudFxuICBsZXQgY29udGVudCA9IGF3YWl0IGdldEVudHJ5KGlkKTtcblxuICBsZXQgY29udGVudEtleXMgPSBPYmplY3Qua2V5cyhjb250ZW50KTtcblxuICAvLyByZW1vdmUgRW50cnkgVGl0bGUgZnJvbSBDb250ZW50ZnVsXG4gIGNvbnRlbnRLZXlzLnNwbGljZSgwLCAxKTtcblxuICAvLyBsb29rIHRvIHNlZSBpZiB0aGVyZSBhcmUgY2hpbGRyZW5cbiAgY29uc3QgaGFzQ2hpbGRyZW4gPSAoY29udGVudC5jb21wb25lbnRzKS5sZW5ndGggPiAwO1xuXG4gIC8vIGlmIHRoZXJlIGFyZSBjaGlsZHJlbiBnZXQgZGF0YSBmb3IgdGhlbVxuICBpZiAoaGFzQ2hpbGRyZW4pIHtcbiAgICAoY29udGVudC5jb21wb25lbnRzKS5tYXAoKGNvbXBvbmVudCkgPT4ge1xuICAgICAgLy8gZ2V0IHRoZSBjb21wb25lbnQgaWRcbiAgICAgIGNvbnN0IGNoaWxkSWQgPSBjb21wb25lbnQuc3lzPy5pZDtcblxuICAgICAgLy8gc3RvcmUgdGhlIGlkc1xuICAgICAgY2hpbGRJZHMucHVzaChjaGlsZElkKTtcbiAgICB9KTtcblxuICAgIC8vIGdldCBjb21wb25lbnQgZGF0YVxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBhd2FpdCBnZXRDb21wb25lbnREYXRhKCk7XG5cbiAgICAvLyByZW1vdmUgY29tcG9uZW50IG9iamVjdCB3aXRoIG9ubHkgSURzXG4gICAgZGVsZXRlIGNvbnRlbnQuY29tcG9uZW50cztcblxuICAgIC8vIHJlcGxhY2UgY29tcG9uZW50cyBkYXRhXG4gICAgY29udGVudC5jb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudCxcbiAgfTtcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gdG8gZ2V0IGRhdGEgZm9yIGNoaWxkcmVuXG5jb25zdCBnZXRDb21wb25lbnREYXRhID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGNoaWxkSWRzLm1hcChpdGVtID0+IGdldENoaWxkRW50cnlEYXRhKGl0ZW0pKSlcbn1cblxuLy8gZ2V0IHRoZSBjb250ZW50IG91dCBvZiB0aGUgZGF0YVxuY29uc3QgZ2V0Q2hpbGRFbnRyeUNvbnRlbnQgPSBjb250ZW50ID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnROYW1lOiBjb250ZW50LmNvbXBvbmVudE5hbWUsXG4gICAgZGF0YTogY29udGVudFxuICB9XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRvIGdldCBjaGlsZCBlbnRyeSBkYXRhXG5jb25zdCBnZXRDaGlsZEVudHJ5RGF0YSA9IGFzeW5jIGlkID0+IHtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldEVudHJ5KGlkKTtcblxuICByZXR1cm4gZ2V0Q2hpbGRFbnRyeUNvbnRlbnQoY29udGVudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEVudHJ5LFxuICBnZXRBc3NldCxcbiAgZ2V0UGFnZUNvbnRlbnQsXG4gIGdldENvbnRlbnRmdWxFbnRyeSxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utilities/cms.js\n");

/***/ })

})