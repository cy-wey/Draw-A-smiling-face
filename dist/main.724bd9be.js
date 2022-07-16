// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var str = '/*\u4F60\u597D\uFF0C\u6211\u662F\u524D\u7AEF\u5C0F\u767D\n\n\u73B0\u5728\u7ED9\u5927\u5BB6\u753B\u4F60\u7B11\u8138\n\n\u9996\u5148\uFF0C\u753B\u4E2A\u5706\u8138*/\n\n.face {\n   \n    border: 1px solid orange;\n    width: 20rem;\n    height: 20rem;\n    border-radius: 50%;\n    background: yellow;\n}\n\n/*\u753B\u4E24\u53EA\u773C\u775B*/\n\n.left-eye {\n    left: 20%;\n}\n\n.right-eye {\n   \n    right: 20%;\n}\n\n.eyes {\n    position: absolute;\n    border: 1px solid orange;\n    top: 15%;\n    width: 4rem;\n    height: 6rem;\n    border-radius:100%;\n    background: #eee;\n    overflow: hidden;\n}\n\n/*\u753B\u4E24\u4E2A\u773C\u7403*/\n\n.eye-ball {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    margin-left: -1.9rem;\n    width: 3.8rem;\n    height: 3.8rem;\n    border-radius: 100%;\n    background: #222;\n}\n\n/*\u753B\u4E2A\u5634\u5DF4*/\n\n.mouth {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 1.5rem;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 50%;\n    width: 15rem;\n    height: 15rem;\n    border: 0.3rem solid transparent;\n    border-bottom: 0.3rem solid orange;\n}\n\n\u7B11\u8138\u753B\u597D\u4E86\uFF01\uFF01\uFF01\n';

var n = 0;
var str2 = '';
var step = function step() {
    setTimeout(function () {
        if (str[n] === '\n') {
            str2 += '<br>';
        } else if (str[n] === ' ') {
            str2 += '&nbsp';
        } else if (str[n] === '/' && str[n + 1] === '*' || str[n] === '*' && str[n + 1] === '/') {
            str2 += '';
            n++;
        } else {
            str2 += str[n];
        }
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        if (n < str.length - 1) {
            step();
            window.scrollTo(0, 99999);
            html.scrollTo(0, 99999);
        }
        n++;
    }, 50);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.724bd9be.map