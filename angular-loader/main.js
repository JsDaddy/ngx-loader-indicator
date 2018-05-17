(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-loader/angular-loader.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/angular-loader/angular-loader.directive.ts ***!
  \************************************************************/
/*! exports provided: AngularLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLoaderDirective", function() { return AngularLoaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/angular-loader/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AngularLoaderDirective = /** @class */ (function () {
    function AngularLoaderDirective(_config, _el, _renderer) {
        this._config = _config;
        this._el = _el;
        this._renderer = _renderer;
        this.loaderStyles = _config.loaderStyles;
        this.imgStyles = _config.imgStyles;
        this.hostStyles = _config.hostStyles;
        this.img = _config.img;
    }
    Object.defineProperty(AngularLoaderDirective.prototype, "show", {
        set: function (value) {
            if (!value) {
                this.loaderEl ? this._setStyles(this.loaderEl, { display: 'none' }) : null;
                return;
            }
            this.loaderEl = this._renderer.createElement('div');
            var img = this._renderer.createElement('img');
            this._renderer.appendChild(this._el.nativeElement, this.loaderEl);
            this._renderer.appendChild(this.loaderEl, img);
            this._setStyles(this._el.nativeElement, this.hostStyles);
            this._setStyles(this.loaderEl, this.loaderStyles);
            this._setStyles(img, this.imgStyles);
            this._renderer.setAttribute(img, 'src', this.img);
        },
        enumerable: true,
        configurable: true
    });
    AngularLoaderDirective.prototype._setStyles = function (element, styles) {
        var _this = this;
        Object.keys(styles).forEach(function (key) {
            _this._renderer.setStyle(element, key, styles[key]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AngularLoaderDirective.prototype, "show", null);
    AngularLoaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[loader]',
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AngularLoaderDirective);
    return AngularLoaderDirective;
}());



/***/ }),

/***/ "./src/app/angular-loader/angular-loader.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/angular-loader/angular-loader.module.ts ***!
  \*********************************************************/
/*! exports provided: NgxLoaderIndicatorModule, _configFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoaderIndicatorModule", function() { return NgxLoaderIndicatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony import */ var _angular_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-loader.directive */ "./src/app/angular-loader/angular-loader.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/angular-loader/config.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgxLoaderIndicatorModule = /** @class */ (function () {
    function NgxLoaderIndicatorModule() {
    }
    NgxLoaderIndicatorModule_1 = NgxLoaderIndicatorModule;
    NgxLoaderIndicatorModule.forRoot = function (configValue) {
        return {
            ngModule: NgxLoaderIndicatorModule_1,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_3__["NEW_CONFIG"],
                    useValue: configValue
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_3__["INITIAL_CONFIG"],
                    useValue: _config__WEBPACK_IMPORTED_MODULE_3__["initialConfig"]
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_3__["config"],
                    useFactory: _configFactory,
                    deps: [_config__WEBPACK_IMPORTED_MODULE_3__["INITIAL_CONFIG"], _config__WEBPACK_IMPORTED_MODULE_3__["NEW_CONFIG"]]
                },
            ]
        };
    };
    NgxLoaderIndicatorModule = NgxLoaderIndicatorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _angular_loader_directive__WEBPACK_IMPORTED_MODULE_0__["AngularLoaderDirective"],
            ],
            exports: [
                _angular_loader_directive__WEBPACK_IMPORTED_MODULE_0__["AngularLoaderDirective"],
            ]
        })
    ], NgxLoaderIndicatorModule);
    return NgxLoaderIndicatorModule;
    var NgxLoaderIndicatorModule_1;
}());

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}


/***/ }),

/***/ "./src/app/angular-loader/config.ts":
/*!******************************************!*\
  !*** ./src/app/angular-loader/config.ts ***!
  \******************************************/
/*! exports provided: config, NEW_CONFIG, INITIAL_CONFIG, initialConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
var initialConfig = {
    // tslint:disable-next-line:max-line-length
    img: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLXNwaW5uZXIiIHdpZHRoPSIzOXB4IiAgaGVpZ2h0PSIzOXB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4gIDxyZWN0IHg9IjQ3LjUiIHk9Ii0zLjUiIHJ4PSIwLjk1MDAwMDAwMDAwMDAwMDEiIHJ5PSItMC4wNyIgd2lkdGg9IjUiIGhlaWdodD0iMjciIGZpbGw9IiNGOTc3NTYiPiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPiAgPC9yZWN0PjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMCA1MCA1MCkiPiAgPHJlY3QgeD0iNDcuNSIgeT0iLTMuNSIgcng9IjAuOTUwMDAwMDAwMDAwMDAwMSIgcnk9Ii0wLjA3IiB3aWR0aD0iNSIgaGVpZ2h0PSIyNyIgZmlsbD0iI0Y5Nzc1NiI+ICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC43NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC42NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTUwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjQwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4yNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+ICA8L3JlY3Q+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPiAgPHJlY3QgeD0iNDcuNSIgeT0iLTMuNSIgcng9IjAuOTUwMDAwMDAwMDAwMDAwMSIgcnk9Ii0wLjA3IiB3aWR0aD0iNSIgaGVpZ2h0PSIyNyIgZmlsbD0iI0Y5Nzc1NiI+ICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMTY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPiAgPC9yZWN0PjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDAgNTAgNTApIj4gIDxyZWN0IHg9IjQ3LjUiIHk9Ii0zLjUiIHJ4PSIwLjk1MDAwMDAwMDAwMDAwMDEiIHJ5PSItMC4wNyIgd2lkdGg9IjUiIGhlaWdodD0iMjciIGZpbGw9IiNGOTc3NTYiPiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzMwIDUwIDUwKSI+ICA8cmVjdCB4PSI0Ny41IiB5PSItMy41IiByeD0iMC45NTAwMDAwMDAwMDAwMDAxIiByeT0iLTAuMDciIHdpZHRoPSI1IiBoZWlnaHQ9IjI3IiBmaWxsPSIjRjk3NzU2Ij4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4gIDwvcmVjdD48L2c+PC9zdmc+',
    loaderStyles: {
        'position': 'absolute',
        'left': '0',
        'right': '0',
        'top': '0',
        'bottom': '0',
        'background': 'rgba(255, 255, 255, 0.8)',
        'z-index': '50',
    },
    imgStyles: {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'max-width': '20px',
        'max-height': '20px',
    },
    hostStyles: {
        'position': 'relative'
    }
};


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"logo align-middle\">\n          <a target=\"_blank\" href=\"http://jsdaddy.io/\">\n            <img src=\"http://jsdaddy.io/img/logo.png\" alt=\"jsdaddy\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <h1 class=\"title\">\n          <span class=\"jq-label\">Angular</span>\n          <span class=\"plugin-name\">NGX LOADER Plugin</span>\n        </h1>\n        <span class=\"subtitle\">NGX LOADER is the best directive without wrapping your element to additional component</span>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <mat-card>\n          <form (ngSubmit)=\"login(auth.value)\" [formGroup]=\"auth\" loader [show]=\"isLoading\">\n            <h2 class=\"login-title\">Login</h2>\n            <div>\n              <mat-form-field class=\"\">\n                <input matInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\">\n                <mat-hint align=\"end\" *ngIf=\"auth.controls['email'].errors && auth.controls['email'].touched\">\n                  You can't leave this empty.\n                </mat-hint>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-form-field class=\"\">\n                <input matInput type=\"password\" placeholder=\"Password\" #name formControlName=\"password\">\n                <mat-hint align=\"end\"\n                          *ngIf=\"auth.controls['password'].hasError('required') && auth.controls['password'].touched\">\n                  You can't leave this empty.\n                </mat-hint>\n              </mat-form-field>\n            </div>\n            <button mat-button [disabled]=\"auth.invalid\">Login</button>\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-grid-wr\">\n          <span>Documentation - see docs on\n            <a class=\"git-link\" target=\"_blank\" href=\"https://github.com/JsDaddy/ngx-loader-indicator\">\n              <img src=\"../assets/images/GitHub-Mark-64px.png\" alt=\"github\">\n            </a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 500px;\n  height: 500px;\n  background: #ccc; }\n\nheader {\n  padding: 10px 0;\n  background-color: #f8f8f8;\n  margin-bottom: 100px; }\n\nheader .logo {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding-top: 6px; }\n\nheader .logo a {\n      display: block; }\n\nheader .logo a img {\n        width: 100%;\n        max-width: 140px; }\n\nheader .title {\n    padding: 0;\n    margin: 0; }\n\nheader .title .plugin-name {\n      font-size: 30px;\n      color: #ffcc00; }\n\nheader .title .jq-label {\n      font-size: 26px;\n      line-height: 30px;\n      color: #383838;\n      display: block; }\n\nheader span.subtitle {\n    margin-bottom: 20px;\n    font-size: 14px; }\n\nheader .git-link img {\n    width: 20px; }\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1); }\n\n.login-title {\n  padding-bottom: 40px; }\n\n.mat-card[_ngcontent-c0]:not([class*=mat-elevation-z]) {\n  max-width: 615px;\n  margin: 0 auto 65px auto;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
        this.isLoading = false;
        this.img = '/assets/images/spinner.svg';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.auth = this._fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AppComponent.prototype.login = function (data) {
        var _this = this;
        this.isLoading = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000)).subscribe(function () {
            _this.auth.reset();
            _this.isLoading = false;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_loader_angular_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-loader/angular-loader.module */ "./src/app/angular-loader/angular-loader.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_loader_angular_loader_module__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderIndicatorModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/jsDaddyProjects/ngx-loader-indicator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map