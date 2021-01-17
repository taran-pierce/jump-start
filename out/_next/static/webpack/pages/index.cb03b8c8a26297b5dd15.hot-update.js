webpackHotUpdate_N_E("pages/index",{

/***/ "./utilities/cms.js":
/*!**************************!*\
  !*** ./utilities/cms.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process, module) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n\nvar _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n\nvar contentful = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\");\n\nvar spaceId = process.env.SPACE_ID;\nvar envId = process.env.ENV_ID;\nvar accessToken = process.env.ACCESS_TOKEN;\n\nfunction getContentfulEntry(_x) {\n  return _getContentfulEntry.apply(this, arguments);\n}\n\nfunction _getContentfulEntry() {\n  _getContentfulEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(id) {\n    var client, data, dataKeyArray, filteredData;\n    return _regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            client = contentful.createClient({\n              space: spaceId,\n              environment: envId,\n              // defaults to 'master' if not set\n              accessToken: accessToken\n            });\n            _context3.next = 3;\n            return client.getEntry(id).then(function (entry) {\n              // console.log('entry: ', entry);\n              return entry.fields;\n            })[\"catch\"](console.error);\n\n          case 3:\n            data = _context3.sent;\n            dataKeyArray = Object.keys(data);\n            filteredData = dataKeyArray.map(function (key) {\n              return filterData(key, data);\n            });\n            console.log('filteredData: ', filteredData);\n            return _context3.abrupt(\"return\", data);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getContentfulEntry.apply(this, arguments);\n}\n\nfunction filterData(key, data) {\n  var newObject = {};\n  console.log('data[key]: ', data[key]);\n  var hasSubData = typeof data[key] === object;\n  console.log('hasSubData: ', hasSubData);\n  newObject[key] = {\n    name: key,\n    data: data[key]\n  };\n  return newObject;\n}\n\nvar baseUrl = \"https://cdn.contentful.com/spaces/\".concat(spaceId, \"/environments/\").concat(envId);\n\nfunction getEntry(_x2) {\n  return _getEntry.apply(this, arguments);\n}\n\nfunction _getEntry() {\n  _getEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(id) {\n    var _pageContent$image, _pageContent$image$sy;\n\n    var url, res, content, pageContent, imageId, image;\n    return _regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            url = \"\".concat(baseUrl, \"/entries/\").concat(id, \"?access_token=\").concat(accessToken);\n            _context4.next = 3;\n            return fetch(url)[\"catch\"](function (error) {\n              console.error('There was an error: ', error);\n            });\n\n          case 3:\n            res = _context4.sent;\n            _context4.next = 6;\n            return res.json();\n\n          case 6:\n            content = _context4.sent;\n            pageContent = content.fields;\n            imageId = (_pageContent$image = pageContent.image) === null || _pageContent$image === void 0 ? void 0 : (_pageContent$image$sy = _pageContent$image.sys) === null || _pageContent$image$sy === void 0 ? void 0 : _pageContent$image$sy.id;\n            _context4.t0 = imageId;\n\n            if (!_context4.t0) {\n              _context4.next = 14;\n              break;\n            }\n\n            _context4.next = 13;\n            return getAsset(imageId);\n\n          case 13:\n            _context4.t0 = _context4.sent;\n\n          case 14:\n            image = _context4.t0;\n\n            // replace image data if found\n            if (image) {\n              pageContent.image = image;\n            }\n\n            return _context4.abrupt(\"return\", pageContent);\n\n          case 17:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getEntry.apply(this, arguments);\n}\n\nfunction getAsset(_x3) {\n  return _getAsset.apply(this, arguments);\n}\n\nfunction _getAsset() {\n  _getAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(id) {\n    var url, res, content, pageContent;\n    return _regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            url = \"\".concat(baseUrl, \"/assets/\").concat(id, \"?access_token=\").concat(accessToken);\n            _context5.next = 3;\n            return fetch(url)[\"catch\"](function (error) {\n              console.error('There was an error: ', error);\n            });\n\n          case 3:\n            res = _context5.sent;\n            _context5.next = 6;\n            return res.json();\n\n          case 6:\n            content = _context5.sent;\n            pageContent = content.fields;\n            return _context5.abrupt(\"return\", pageContent);\n\n          case 9:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _getAsset.apply(this, arguments);\n}\n\nvar childIds = [];\n\nfunction getPageContent(_x4) {\n  return _getPageContent.apply(this, arguments);\n} // async function to get data for children\n\n\nfunction _getPageContent() {\n  _getPageContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(id) {\n    var content, contentKeys, hasChildren, components;\n    return _regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return getEntry(id);\n\n          case 2:\n            content = _context6.sent;\n            contentKeys = Object.keys(content); // remove Entry Title from Contentful\n\n            contentKeys.splice(0, 1); // look to see if there are children\n\n            hasChildren = content.components.length > 0; // if there are children get data for them\n\n            if (!hasChildren) {\n              _context6.next = 13;\n              break;\n            }\n\n            content.components.map(function (component) {\n              var _component$sys;\n\n              // get the component id\n              var childId = (_component$sys = component.sys) === null || _component$sys === void 0 ? void 0 : _component$sys.id; // store the ids\n\n              childIds.push(childId);\n            }); // get component data\n\n            _context6.next = 10;\n            return getComponentData();\n\n          case 10:\n            components = _context6.sent;\n            // remove component object with only IDs\n            delete content.components; // replace components data\n\n            content.components = components;\n\n          case 13:\n            return _context6.abrupt(\"return\", {\n              content: content\n            });\n\n          case 14:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _getPageContent.apply(this, arguments);\n}\n\nvar getComponentData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(content) {\n    return _regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", Promise.all(childIds.map(function (item) {\n              return getChildEntryData(item);\n            })));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getComponentData(_x5) {\n    return _ref.apply(this, arguments);\n  };\n}(); // get the content out of the data\n\n\nvar getChildEntryContent = function getChildEntryContent(content) {\n  return {\n    componentName: content.componentName,\n    data: content\n  };\n}; // async function to get child entry data\n\n\nvar getChildEntryData = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(id) {\n    var content;\n    return _regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getEntry(id);\n\n          case 2:\n            content = _context2.sent;\n            return _context2.abrupt(\"return\", getChildEntryContent(content));\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getChildEntryData(_x6) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nmodule.exports = {\n  getEntry: getEntry,\n  getAsset: getAsset,\n  getPageContent: getPageContent,\n  getContentfulEntry: getContentfulEntry\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbGl0aWVzL2Ntcy5qcz8wYTYwIl0sIm5hbWVzIjpbImNvbnRlbnRmdWwiLCJyZXF1aXJlIiwic3BhY2VJZCIsInByb2Nlc3MiLCJlbnYiLCJTUEFDRV9JRCIsImVudklkIiwiRU5WX0lEIiwiYWNjZXNzVG9rZW4iLCJBQ0NFU1NfVE9LRU4iLCJnZXRDb250ZW50ZnVsRW50cnkiLCJpZCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwiZW52aXJvbm1lbnQiLCJnZXRFbnRyeSIsInRoZW4iLCJlbnRyeSIsImZpZWxkcyIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJkYXRhS2V5QXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyZWREYXRhIiwibWFwIiwia2V5IiwiZmlsdGVyRGF0YSIsImxvZyIsIm5ld09iamVjdCIsImhhc1N1YkRhdGEiLCJvYmplY3QiLCJuYW1lIiwiYmFzZVVybCIsInVybCIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnRlbnQiLCJwYWdlQ29udGVudCIsImltYWdlSWQiLCJpbWFnZSIsInN5cyIsImdldEFzc2V0IiwiY2hpbGRJZHMiLCJnZXRQYWdlQ29udGVudCIsImNvbnRlbnRLZXlzIiwic3BsaWNlIiwiaGFzQ2hpbGRyZW4iLCJjb21wb25lbnRzIiwibGVuZ3RoIiwiY29tcG9uZW50IiwiY2hpbGRJZCIsInB1c2giLCJnZXRDb21wb25lbnREYXRhIiwiUHJvbWlzZSIsImFsbCIsIml0ZW0iLCJnZXRDaGlsZEVudHJ5RGF0YSIsImdldENoaWxkRW50cnlDb250ZW50IiwiY29tcG9uZW50TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsMkVBQUQsQ0FBMUI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBNUI7QUFDQSxJQUFNQyxLQUFLLEdBQUdILE9B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cUIsb0JBQW9CLENBQUNyQixPQUFELENBSEg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBakJvQixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBTUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmaEQsVUFBUSxFQUFSQSxRQURlO0FBRWY2QixVQUFRLEVBQVJBLFFBRmU7QUFHZkUsZ0JBQWMsRUFBZEEsY0FIZTtBQUlmckMsb0JBQWtCLEVBQWxCQTtBQUplLENBQWpCIiwiZmlsZSI6Ii4vdXRpbGl0aWVzL2Ntcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRmdWwgPSByZXF1aXJlKCdjb250ZW50ZnVsJyk7XG5cbmNvbnN0IHNwYWNlSWQgPSBwcm9jZXNzLmVudi5TUEFDRV9JRDtcbmNvbnN0IGVudklkID0gcHJvY2Vzcy5lbnYuRU5WX0lEO1xuY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU47XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbnRlbnRmdWxFbnRyeShpZCkge1xuICBjb25zdCBjbGllbnQgPSBjb250ZW50ZnVsLmNyZWF0ZUNsaWVudCh7XG4gICAgc3BhY2U6IHNwYWNlSWQsXG4gICAgZW52aXJvbm1lbnQ6IGVudklkLCAvLyBkZWZhdWx0cyB0byAnbWFzdGVyJyBpZiBub3Qgc2V0XG4gICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0RW50cnkoaWQpXG4gICAgLnRoZW4oKGVudHJ5KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50cnk6ICcsIGVudHJ5KTtcblxuICAgICAgcmV0dXJuIGVudHJ5LmZpZWxkcztcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICBjb25zdCBkYXRhS2V5QXJyYXkgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuXG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGFLZXlBcnJheS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4gZmlsdGVyRGF0YShrZXksIGRhdGEpO1xuICB9KTtcblxuICBjb25zb2xlLmxvZygnZmlsdGVyZWREYXRhOiAnLCBmaWx0ZXJlZERhdGEpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJEYXRhKGtleSwgZGF0YSkge1xuICBsZXQgbmV3T2JqZWN0ID0ge307XG5cbiAgY29uc29sZS5sb2coJ2RhdGFba2V5XTogJywgZGF0YVtrZXldKTtcblxuICBjb25zdCBoYXNTdWJEYXRhID0gdHlwZW9mIGRhdGFba2V5XSA9PT0gIG9iamVjdDtcblxuICBjb25zb2xlLmxvZygnaGFzU3ViRGF0YTogJywgaGFzU3ViRGF0YSk7XG5cbiAgbmV3T2JqZWN0W2tleV0gPSB7XG4gICAgbmFtZToga2V5LFxuICAgIGRhdGE6IGRhdGFba2V5XVxuICB9O1xuXG4gIHJldHVybiBuZXdPYmplY3Q7XG59XG5cbmNvbnN0IGJhc2VVcmwgPSBgaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLyR7c3BhY2VJZH0vZW52aXJvbm1lbnRzLyR7ZW52SWR9YDtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRFbnRyeShpZCkge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9lbnRyaWVzLyR7aWR9P2FjY2Vzc190b2tlbj0ke2FjY2Vzc1Rva2VufWA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yOiAnLCBlcnJvcik7XG4gIH0pO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBjb250ZW50LmZpZWxkcztcblxuICBjb25zdCBpbWFnZUlkID0gcGFnZUNvbnRlbnQuaW1hZ2U/LnN5cz8uaWQ7XG4gIGNvbnN0IGltYWdlID0gaW1hZ2VJZCAmJiBhd2FpdCBnZXRBc3NldChpbWFnZUlkKTtcblxuICAvLyByZXBsYWNlIGltYWdlIGRhdGEgaWYgZm91bmRcbiAgaWYgKGltYWdlKSB7XG4gICAgcGFnZUNvbnRlbnQuaW1hZ2UgPSBpbWFnZTtcbiAgfVxuXG4gIHJldHVybiBwYWdlQ29udGVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXQoaWQpIHtcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXNzZXRzLyR7aWR9P2FjY2Vzc190b2tlbj0ke2FjY2Vzc1Rva2VufWA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yOiAnLCBlcnJvcik7XG4gIH0pO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBjb250ZW50LmZpZWxkcztcblxuICByZXR1cm4gcGFnZUNvbnRlbnQ7XG59XG5cbmNvbnN0IGNoaWxkSWRzID0gW107XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VDb250ZW50KGlkKSB7XG4gIC8vIGdldCBwYWdlIGNvbnRlbnRcbiAgbGV0IGNvbnRlbnQgPSBhd2FpdCBnZXRFbnRyeShpZCk7XG5cbiAgbGV0IGNvbnRlbnRLZXlzID0gT2JqZWN0LmtleXMoY29udGVudCk7XG5cbiAgLy8gcmVtb3ZlIEVudHJ5IFRpdGxlIGZyb20gQ29udGVudGZ1bFxuICBjb250ZW50S2V5cy5zcGxpY2UoMCwgMSk7XG5cbiAgLy8gbG9vayB0byBzZWUgaWYgdGhlcmUgYXJlIGNoaWxkcmVuXG4gIGNvbnN0IGhhc0NoaWxkcmVuID0gKGNvbnRlbnQuY29tcG9uZW50cykubGVuZ3RoID4gMDtcblxuICAvLyBpZiB0aGVyZSBhcmUgY2hpbGRyZW4gZ2V0IGRhdGEgZm9yIHRoZW1cbiAgaWYgKGhhc0NoaWxkcmVuKSB7XG4gICAgKGNvbnRlbnQuY29tcG9uZW50cykubWFwKChjb21wb25lbnQpID0+IHtcbiAgICAgIC8vIGdldCB0aGUgY29tcG9uZW50IGlkXG4gICAgICBjb25zdCBjaGlsZElkID0gY29tcG9uZW50LnN5cz8uaWQ7XG5cbiAgICAgIC8vIHN0b3JlIHRoZSBpZHNcbiAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGRJZCk7XG4gICAgfSk7XG5cbiAgICAvLyBnZXQgY29tcG9uZW50IGRhdGFcbiAgICBjb25zdCBjb21wb25lbnRzID0gYXdhaXQgZ2V0Q29tcG9uZW50RGF0YSgpO1xuXG4gICAgLy8gcmVtb3ZlIGNvbXBvbmVudCBvYmplY3Qgd2l0aCBvbmx5IElEc1xuICAgIGRlbGV0ZSBjb250ZW50LmNvbXBvbmVudHM7XG5cbiAgICAvLyByZXBsYWNlIGNvbXBvbmVudHMgZGF0YVxuICAgIGNvbnRlbnQuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQsXG4gIH07XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRvIGdldCBkYXRhIGZvciBjaGlsZHJlblxuY29uc3QgZ2V0Q29tcG9uZW50RGF0YSA9IGFzeW5jIChjb250ZW50KSA9PiB7XG4gIHJldHVybiBQcm9taXNlLmFsbChjaGlsZElkcy5tYXAoaXRlbSA9PiBnZXRDaGlsZEVudHJ5RGF0YShpdGVtKSkpXG59XG5cbi8vIGdldCB0aGUgY29udGVudCBvdXQgb2YgdGhlIGRhdGFcbmNvbnN0IGdldENoaWxkRW50cnlDb250ZW50ID0gY29udGVudCA9PiB7XG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50TmFtZTogY29udGVudC5jb21wb25lbnROYW1lLFxuICAgIGRhdGE6IGNvbnRlbnRcbiAgfVxufVxuXG4vLyBhc3luYyBmdW5jdGlvbiB0byBnZXQgY2hpbGQgZW50cnkgZGF0YVxuY29uc3QgZ2V0Q2hpbGRFbnRyeURhdGEgPSBhc3luYyBpZCA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRFbnRyeShpZCk7XG5cbiAgcmV0dXJuIGdldENoaWxkRW50cnlDb250ZW50KGNvbnRlbnQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRFbnRyeSxcbiAgZ2V0QXNzZXQsXG4gIGdldFBhZ2VDb250ZW50LFxuICBnZXRDb250ZW50ZnVsRW50cnksXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utilities/cms.js\n");

/***/ })

})