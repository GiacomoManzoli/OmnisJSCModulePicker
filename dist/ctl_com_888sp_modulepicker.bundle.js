(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes tab-ripple {\n    to {\n        transform: scale(4);\n        opacity: 0;\n    }\n}\n\nspan.tab-ripple {\n    position: absolute; /* The absolute position we mentioned earlier */\n    border-radius: 50%;\n    transform: scale(0);\n    animation: tab-ripple 600ms linear;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n@keyframes append-animate {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ModulePicker.ts":
/*!*****************************!*\
  !*** ./src/ModulePicker.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulePicker = exports.Module = void 0;
__webpack_require__(/*! ./style.css */ "./src/style.css");
var Module = /** @class */ (function () {
    function Module(data) {
        this.id = 0;
        this.id = data.id;
        this.group = data.group;
        this.name = data.name;
    }
    return Module;
}());
exports.Module = Module;
var ModuleGroup = /** @class */ (function () {
    function ModuleGroup() {
    }
    return ModuleGroup;
}());
var ModulePicker = /** @class */ (function () {
    function ModulePicker(container) {
        this.filter = "";
        this.rendered = new Map();
        this.defaultCollapsed = false;
        this.container = container;
        this.container.innerHTML = "";
        this.handlers = new Map();
    }
    ModulePicker.prototype.addEventListener = function (evName, callback) {
        this.handlers.set(evName, callback);
    };
    ModulePicker.prototype.setModules = function (modules) {
        var _this = this;
        this.rendered = new Map();
        modules.forEach(function (v) {
            var group = v.group;
            if (_this.rendered.has(group)) {
                var g = _this.rendered.get(group);
                g.modules.push({
                    visible: true,
                    module: v,
                    element: null,
                });
            }
            else {
                var moduleGroup = new ModuleGroup();
                moduleGroup.group = v.group;
                moduleGroup.expanded = !_this.defaultCollapsed;
                moduleGroup.visible = true;
                moduleGroup.element = null;
                moduleGroup.modules = [
                    {
                        visible: true,
                        module: v,
                        element: null,
                    },
                ];
                _this.rendered.set(group, moduleGroup);
            }
        });
        // TODO: gestire cancellazione
    };
    ModulePicker.prototype.setFilter = function (filter) {
        this.filter = filter;
        if (this.filter == "0") {
            this.filter = "";
        }
    };
    ModulePicker.prototype.applyFilter = function () {
        var currData = this.rendered;
        var filter = this.filter.toLocaleLowerCase();
        currData.forEach(function (group) {
            group.visible = false;
            group.modules.forEach(function (m) {
                m.visible =
                    filter == "" ||
                        m.module.name.toLocaleLowerCase().includes(filter) ||
                        m.module.group.toLocaleLowerCase().includes(filter);
                group.visible = group.visible || m.visible; // Group visible if at least one element in visible
            });
        });
        return currData;
    };
    ModulePicker.prototype.createGroupElement = function (g) {
        var _this = this;
        var groupContainer = document.createElement("div");
        var title = document.createElement("p");
        title.style.fontWeight = "bold";
        title.style.cursor = "pointer";
        title.style.fontSize = this.titleFontSize + "pt";
        var expandCollapse = document.createElement("span");
        expandCollapse.innerText = "+";
        expandCollapse.style.display = "inline-block";
        expandCollapse.style.width = this.titleFontSize + 1 + "pt";
        expandCollapse.style.height = this.titleFontSize + 1 + "pt";
        expandCollapse.style.textAlign = "center";
        title.appendChild(expandCollapse);
        var titleText = document.createElement("span");
        titleText.innerText = "";
        title.appendChild(titleText);
        groupContainer.appendChild(title);
        title.onclick = function (e) {
            g.expanded = !g.expanded;
            _this.updateGroupElement(g);
            var ul = g.element.querySelector("ul");
            if (ul) {
                ul.style.display = g.expanded ? "flex" : "none";
                var lis = ul.getElementsByClassName("tab-ripple");
                for (var i = 0; i < lis.length; i++) {
                    lis.item(i).remove();
                }
            }
        };
        var listContainer = document.createElement("ul");
        listContainer.style.display = g.expanded ? "flex" : "none";
        listContainer.style.flexWrap = "wrap";
        listContainer.style.width = "100%";
        listContainer.style.listStyleType = "none";
        listContainer.style.padding = "0";
        // listContainer.style.transition = "display 0.2s ease-out"
        // transition: max-height 0.2s ease-out;
        groupContainer.appendChild(listContainer);
        return groupContainer;
    };
    ModulePicker.prototype.updateGroupElement = function (g) {
        g.element.style.display = g.visible ? "block" : "none";
        var title = g.element.querySelector("p");
        var titleContent = Array.from(title.querySelectorAll("span"));
        var expandCollapse = titleContent[0], titleText = titleContent[1];
        expandCollapse.innerText = g.expanded ? "-" : "+";
        titleText.innerText = g.group;
        // text.innerText = g.group
    };
    ModulePicker.prototype.createModuleElement = function (m) {
        var _this = this;
        var item = document.createElement("li");
        item.style.cursor = "pointer";
        item.style.display = m.visible ? "flex" : "none";
        item.style.position = "relative";
        item.style.overflow = "hidden";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
        item.style.width = this.boxWidth + "px";
        item.style.height = this.boxHeight + "px";
        item.style.color = this.boxTextColor;
        item.style.backgroundColor = this.boxColor;
        item.style.fontSize = this.fontSize + "pt";
        item.style.minWidth = item.style.width;
        item.style.minHeight = item.style.height;
        item.style.margin = "16px";
        item.style.boxShadow = "\n        0 2px 8px 0 rgba(var(--shadow-color), 0.14), \n        0 1px 8px 0 rgba(var(--shadow-color), 0.12),\n        0 1px 2px -1px rgba(var(--shadow-color), 0.2)";
        item.style.animation = "append-animate .3s linear";
        var text = document.createElement("span");
        text.innerText = m.module.name;
        text.style.overflow = "hidden";
        text.style.textOverflow = "ellipsis";
        text.style.textAlign = "center";
        text.style.padding = "8px";
        item.appendChild(text);
        item.onclick = function (e) {
            _this.onModuleClick(e, m.module.id, m.module);
        };
        return item;
    };
    ModulePicker.prototype.updateModuleElement = function (m) {
        m.element.style.display = m.visible ? "flex" : "none";
        var text = m.element.querySelector("span");
        text.innerText = m.module.name;
        var ripple = m.element.getElementsByClassName("tab-ripple")[0];
        if (ripple) {
            ripple.remove();
        }
    };
    ModulePicker.prototype.render = function () {
        this.container.style.backgroundColor = this.backgroundColor;
        var groupedData = this.applyFilter();
        var groupNames = Array.from(groupedData.keys());
        for (var j = groupNames.length - 1; j >= 0; j--) {
            var g = groupedData.get(groupNames[j]);
            if (!g.element) {
                g.element = this.createGroupElement(g);
                if (j == 0) {
                    // Inserimento alla fine
                    this.container.insertBefore(g.element, this.container.firstChild);
                }
                else if (j == groupNames.length - 1) {
                    this.container.appendChild(g.element);
                }
                else {
                    var nextGroupData = groupedData.get(groupNames[j + 1]);
                    var nextGroupElement = nextGroupData.element;
                    this.container.insertBefore(g.element, nextGroupElement);
                }
            }
            this.updateGroupElement(g);
            for (var i = g.modules.length - 1; i >= 0; i--) {
                var m = g.modules[i];
                if (!m.element) {
                    m.element = this.createModuleElement(m);
                    var container = g.element.querySelector("ul");
                    if (container) {
                        if (i == 0) {
                            // Inserimento alla fine
                            container.insertBefore(m.element, container.firstChild);
                        }
                        else if (i == g.modules.length - 1) {
                            container.appendChild(m.element);
                        }
                        else {
                            var nextModuleData = g.modules[i + 1];
                            var nextModuleElement = nextModuleData.element;
                            container.insertBefore(m.element, nextModuleElement);
                        }
                    }
                }
                this.updateModuleElement(m);
            }
        }
    };
    ModulePicker.prototype.onModuleClick = function (event, tabId, module) {
        var button = event.currentTarget;
        var circle = document.createElement("span");
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;
        circle.style.width = circle.style.height = diameter + "px";
        circle.style.left = event.clientX - (button.offsetLeft + radius) + "px";
        circle.style.top = event.clientY - (button.offsetTop + radius) + "px";
        circle.classList.add("tab-ripple");
        var ripple = button.getElementsByClassName("tab-ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        button.appendChild(circle);
        event.preventDefault();
        event.stopPropagation();
        var handler = this.handlers.get("moduleclick");
        if (handler) {
            handler(event, tabId, module);
        }
    };
    return ModulePicker;
}());
exports.ModulePicker = ModulePicker;


/***/ }),

/***/ "./src/ctl_com_888sp_picker.ts":
/*!*************************************!*\
  !*** ./src/ctl_com_888sp_picker.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl_com_888sp_modulepicker = void 0;
var ModulePicker_1 = __webpack_require__(/*! ./ModulePicker */ "./src/ModulePicker.ts");
// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    // <OmnisUpdateMarker_PropertyConstants_Begin>
    filter: "::$filter",
    titlefontsize: "$titlefontsize",
    fontsize: "$::fontsize",
    boxwidth: "$boxwidth",
    boxheight: "$boxheight",
    boxcolor: "$boxcolor",
    boxtextcolor: "$boxtextcolor",
    backgroundcolor: "$::backgroundcolor",
    defaultcollapsed: "$defaultcollapsed",
};
var EVENTS = {
    evNetOmnisControlOpened: 1,
    evModuleClick: 2,
};
var ctrl_com_888sp_modulepicker = /** @class */ (function (_super) {
    __extends(ctrl_com_888sp_modulepicker, _super);
    function ctrl_com_888sp_modulepicker() {
        var _this = _super.call(this) || this;
        _this.autoUpdate = false;
        _this.init_class_inst(); // initialize our class
        return _this;
    }
    ctrl_com_888sp_modulepicker.prototype.init_ctrl_inst = function (form, elem, rowCtrl, rowNumber) {
        _super.prototype.init_ctrl_inst.call(this, form, elem, rowCtrl, rowNumber);
        var client_elem = this.getClientElem();
        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"));
        this.initModulePicker(client_elem);
        for (var propName in PROPERTIES) {
            var propValue = datapropsobj[propName]; // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue);
        }
        this.update();
        return false;
    };
    ctrl_com_888sp_modulepicker.prototype.updateCtrl = function (what, row, col, mustUpdate) {
        var elem = this.getClientElem();
        // read $dataname value and display in control
        var dataname = this.getData();
        var datanameList = new omnis_list(dataname);
        this.mData = dataname;
        if (dataname) {
            var modules = [];
            for (var index = 1; index <= datanameList.getRowCount(); index++) {
                modules.push({
                    id: datanameList.getData("id", index),
                    group: datanameList.getData("group", index),
                    name: datanameList.getData("name", index),
                });
            }
            this.picker.setModules(modules);
            this.picker.render();
        }
        else {
            elem.innerHTML = "MODULE PICKER";
        }
    };
    /**
     * This is called when an event registered using this.mEventFunction() is triggered.
     *
     * @param event The event object
     */
    ctrl_com_888sp_modulepicker.prototype.handleEvent = function (event) {
        if (!this.isEnabled())
            return true; // If the control is disabled, don't process the event.
        switch (event.type) {
            case "click":
                return true;
            // case "touchstart":
            //     this.lastTouch = new Date().getTime() // Note the time of the touch start.
            //     this.touchStartPos = {
            //         x: event.changedTouches0.clientX,
            //         y: event.changedTouches0.clientY,
            //     } // Note the starting position of the touch.
            //     break
            // case "touchend":
            //     var time = new Date().getTime()
            //     if (time - this.lastTouch < 500) {
            //         //Treat as a click if less than 500ms have elapsed since touchstart
            //         if (touchWithinRange(this.touchStartPos, event.changedTouches0, 20)) {
            //             //Only treat as a click if less than 20 pixels have been scrolled.
            //             return this.handleClick(event.changedTouches0.offsetX, event.changedTouches0.offsetY)
            //         }
            //     }
            //     break
        }
        _super.prototype.handleEvent.call(this, event);
    };
    ctrl_com_888sp_modulepicker.prototype.getCanAssign = function (propNumber) {
        return Object.values(PROPERTIES).includes(propNumber.toString()) || _super.prototype.getCanAssign.call(this, propNumber);
    };
    ctrl_com_888sp_modulepicker.prototype.setProperty = function (propNumber, propValue) {
        if (!this.getCanAssign(propNumber)) {
            return false;
        }
        if (propNumber) {
            switch (propNumber) {
                case PROPERTIES.filter:
                    this.picker.setFilter(propValue.toString());
                    this.picker.render();
                    return true;
                case PROPERTIES.defaultcollapsed:
                    this.picker.defaultCollapsed = propValue;
                    return true;
                // Main control
                case PROPERTIES.backgroundcolor:
                    this.picker.backgroundColor = propValue;
                    return true;
                case PROPERTIES.fontsize:
                    this.picker.fontSize = propValue;
                    return true;
                case PROPERTIES.titlefontsize:
                    this.picker.titleFontSize = propValue;
                    return true;
                // BOX
                case PROPERTIES.boxcolor:
                    // With uselegacycolor -> it's a rgb HEX string, else it's an OmnisNumericColor (int value)
                    this.picker.boxColor = propValue;
                    return true;
                case PROPERTIES.boxheight:
                    this.picker.boxHeight = propValue;
                    return true;
                case PROPERTIES.boxwidth:
                    this.picker.boxWidth = propValue;
                    return true;
                case PROPERTIES.boxtextcolor:
                    this.picker.boxTextColor = propValue;
                    return true;
            }
        }
        return _super.prototype.setProperty.call(this, propNumber, propValue);
    };
    ctrl_com_888sp_modulepicker.prototype.getProperty = function (propNumber) {
        switch (propNumber) {
            case PROPERTIES.filter:
                return this.picker.filter;
            // Main control
            case PROPERTIES.backgroundcolor:
                return this.picker.backgroundColor;
            case PROPERTIES.fontsize:
                return this.picker.fontSize;
            case PROPERTIES.titlefontsize:
                return this.picker.titleFontSize;
            // BOX
            case PROPERTIES.boxcolor:
                return this.picker.boxColor;
            case PROPERTIES.boxheight:
                return this.picker.boxHeight;
            case PROPERTIES.boxwidth:
                return this.picker.boxWidth;
            case PROPERTIES.boxtextcolor:
                return this.picker.boxTextColor;
        }
        return _super.prototype.getProperty.call(this, propNumber);
    };
    ctrl_com_888sp_modulepicker.prototype.initModulePicker = function (client_elem) {
        var _this = this;
        this.picker = new ModulePicker_1.ModulePicker(client_elem);
        this.picker.addEventListener("moduleclick", function (event, id, module) {
            if (_this.canSendEvent(EVENTS.evModuleClick)) {
                _this.eventParamsAdd("pModuleId", id);
                _this.eventParamsAdd("pModuleName", module.name);
                _this.eventParamsAdd("pModuleGroup", module.group);
                _this.sendEvent("evModuleClick");
            }
        });
    };
    return ctrl_com_888sp_modulepicker;
}(ctrl_base));
exports.ctrl_com_888sp_modulepicker = ctrl_com_888sp_modulepicker;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ctl_com_888sp_picker */ "./src/ctl_com_888sp_picker.ts"), exports);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })));
//# sourceMappingURL=ctl_com_888sp_modulepicker.bundle.js.map