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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");
/* harmony import */ var _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/gallery/gallery.component */ "./src/app/component/gallery/gallery.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/contact/contact.component */ "./src/app/component/contact/contact.component.ts");






var routes = [
    { path: '', component: _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], pathMatch: 'full' },
    { path: 'gallery', component: _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'contact', component: _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navigate></app-navigate>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'EDphotographer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/navigate/navigate.component */ "./src/app/component/navigate/navigate.component.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");
/* harmony import */ var _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/gallery/gallery.component */ "./src/app/component/gallery/gallery.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/contact/contact.component */ "./src/app/component/contact/contact.component.ts");
/* harmony import */ var _component_gallery_big_img_big_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/gallery/big-img/big-img.component */ "./src/app/component/gallery/big-img/big-img.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_navigate_navigate_component__WEBPACK_IMPORTED_MODULE_5__["NavigateComponent"],
                _component_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
                _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _component_gallery_big_img_big_img_component__WEBPACK_IMPORTED_MODULE_9__["BigImgComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/contact/contact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/contact/contact.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    background-color: rgba(250, 250, 250, 0.1);\r\n    text-align: center;\r\n}\r\n\r\n.evyaImg {\r\n    width: 15rem;\r\n    height: 15rem;\r\n    padding: 10px 0px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#facebook{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXZ5YUltZyB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuI2ZhY2Vib29re1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Evyatar Duek </h2>\n  <h3>Aerial Photographer</h3>\n  <h4>Phone: 052-2537480</h4>\n  <img class=\"evyaImg\" [src]=\"imgService.evyatar\">\n  <br>\n  <a href=\"https://www.facebook.com/evyatar.duek  \" target=\"_blank\">\n    <img id=\"facebook\" src=\"https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png\"\n      alt=\"\">\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/component/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/img-service.service */ "./src/app/service/img-service.service.ts");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(imgService) {
        this.imgService = imgService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/component/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/component/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__["ImgServiceService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/component/gallery/big-img/big-img.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/gallery/big-img/big-img.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color:rgba(182, 180, 180, 0.719);\r\n    min-width: 100%;\r\n    min-height: 100%; \r\n    \r\n    position: absolute;\r\n    z-index: 30;\r\n    margin: 0 ;\r\n}\r\n\r\nimg{\r\n    position: relative;\r\n    display: block;\r\n    size: 50%;\r\n    max-width: 90%;\r\n    margin: auto auto;\r\n    padding: 20px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dhbGxlcnkvYmlnLWltZy9iaWctaW1nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFNBQVM7SUFDVCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2dhbGxlcnkvYmlnLWltZy9iaWctaW1nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4MiwgMTgwLCAxODAsIDAuNzE5KTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDtcclxuICAgIG1hcmdpbjogMCA7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgc2l6ZTogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/gallery/big-img/big-img.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/gallery/big-img/big-img.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"imgservice.isShow\">\n    <img [src]=\"imgsrc\"  (click)=\"imgservice.clickImg()\">\n</div>"

/***/ }),

/***/ "./src/app/component/gallery/big-img/big-img.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/gallery/big-img/big-img.component.ts ***!
  \****************************************************************/
/*! exports provided: BigImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigImgComponent", function() { return BigImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_img_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/img-service.service */ "./src/app/service/img-service.service.ts");



var BigImgComponent = /** @class */ (function () {
    function BigImgComponent(imgservice) {
        this.imgservice = imgservice;
    }
    BigImgComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BigImgComponent.prototype, "imgsrc", void 0);
    BigImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-big-img',
            template: __webpack_require__(/*! ./big-img.component.html */ "./src/app/component/gallery/big-img/big-img.component.html"),
            styles: [__webpack_require__(/*! ./big-img.component.css */ "./src/app/component/gallery/big-img/big-img.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__["ImgServiceService"]])
    ], BigImgComponent);
    return BigImgComponent;
}());



/***/ }),

/***/ "./src/app/component/gallery/gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #container{\r\n\r\n} */\r\n\r\n.row {\r\n    display: flex;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 0 0;\r\n    justify-content: space-around;\r\n    margin: 0 auto;\r\n}\r\n\r\n.smallImg {\r\n    width: 15rem;\r\n    height: 15rem;\r\n    padding: 10px 0px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.smallImg:hover{\r\n    opacity: 0.5;\r\ncursor: pointer;\r\n}\r\n\r\n/* Create four equal columns that sits next to each other */\r\n\r\n.column {\r\n    flex: 25%;\r\n    max-width: 25%;\r\n    padding: 0 4px;\r\n}\r\n\r\n.column img {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n}\r\n\r\n/* Responsive layout - makes a two column-layout instead of four columns */\r\n\r\n@media screen and (max-width: 800px) {\r\n    .column {\r\n        flex: 50%;\r\n        max-width: 50%;\r\n    }\r\n}\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .column {\r\n        flex: 100%;\r\n        max-width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIsZUFBZTtBQUNmOztBQUVBLDJEQUEyRDs7QUFFM0Q7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQSwwRUFBMEU7O0FBRTFFO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsY0FBYztJQUNsQjtBQUNKOztBQUVBLHVHQUF1Rzs7QUFFdkc7SUFDSTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjY29udGFpbmVye1xyXG5cclxufSAqL1xyXG5cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc21hbGxJbWcge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc21hbGxJbWc6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGZvdXIgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcblxyXG4uY29sdW1uIHtcclxuICAgIGZsZXg6IDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbn1cclxuXHJcbi5jb2x1bW4gaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIHR3byBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgZm91ciBjb2x1bW5zICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxleDogNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/gallery/gallery.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <br>\n  <app-big-img [imgsrc]=\"currentImg\"></app-big-img>\n  <div class=\"row\">\n    <img class=\"smallImg\" [src]=\"img\" *ngFor=\"let img of imgService.imgs\" (click)=\"clickImg(img)\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/gallery/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/gallery/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_img_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/img-service.service */ "./src/app/service/img-service.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(imgService) {
        this.imgService = imgService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.clickImg = function (src) {
        this.currentImg = src;
        this.imgService.clickImg();
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/component/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/component/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__["ImgServiceService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/component/main/main.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/main/main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.panorama{\r\n    width: 100%;\r\n    height: 430px;\r\n    border-radius: 20px;\r\n}\r\n\r\np{\r\n    font-size: 20px;\r\n    direction: rtl;\r\n    text-align: center;\r\n}\r\n\r\nfooter{\r\n    text-align: center;\r\n    color: gray;\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYW5vcmFtYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <br>\n  <img class=\"panorama\" [src]=\"currentImg\" alt=\"\">\n</div>\n<br>\n<p>\nאהלן שמי אביתר, ואני מאוד אוהב לצלם, לכן שדרגתי את האהבה שלי <BR>\n  והתחלתי לצלם צילום אווירי בעזרת רחפן :) <br>\n  יש לי רישיון הסמכה ואהבה לתחום <br>\n  אשמח לשתף אתכם ביצירותי ואולי גם אוכל לסייע לכם במשימה... <br>\n  תהנו.\n</p>\n<br><br>\n\n\n<footer>\n All rights reserved 2019 &#169;\n</footer>"

/***/ }),

/***/ "./src/app/component/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/img-service.service */ "./src/app/service/img-service.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(imgService) {
        this.imgService = imgService;
        this.i = 0;
        this.currentImg = this.imgService.panorama[this.i];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.changePanorama();
    };
    MainComponent.prototype.changePanorama = function () {
        var _this = this;
        var imgsNumbers = this.imgService.panorama.length;
        setInterval(function () {
            if (_this.i == imgsNumbers)
                _this.i = 0;
            _this.currentImg = _this.imgService.panorama[_this.i];
            _this.i++;
        }, 4000);
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/component/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/component/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__["ImgServiceService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/component/navigate/navigate.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/navigate/navigate.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    background-color: rgb(51, 51, 51,0.5);\r\n   \r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-between;\r\n}\r\n\r\nul li {\r\n    display: inline;\r\n}\r\n\r\nnav a.current-page {\r\n    font-weight: normal;\r\n}\r\n\r\nh3{\r\n    color: white\r\n}\r\n\r\n.header{\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n\r\n}\r\n\r\n#icon{ \r\n    height: 80px;\r\n    width: 150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdmlnYXRlL25hdmlnYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx3QkFBZ0I7QUFBaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIscUNBQXFDOztBQUV6Qzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbmF2aWdhdGUvbmF2aWdhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbnBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxLDAuNSk7XHJcbiAgIFxyXG59XHJcbm5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG51bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbm5hdiBhLmN1cnJlbnQtcGFnZSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxufVxyXG5cclxuI2ljb257IFxyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/navigate/navigate.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/navigate/navigate.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"header\">\n    <img id=\"icon\" [src]=\"imgService.icon\" alt=\"icon\">\n  </div>\n  <nav>\n    <ul>\n      <li>\n        <a routerLink=\"\">\n          <h3> Main</h3>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"gallery\" routerLinkActive=\"current-page\">\n          <h3> Gallery</h3>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"contact\" routerLinkActive=\"current-page\">\n          <h3> Contact Us</h3>\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n</div>"

/***/ }),

/***/ "./src/app/component/navigate/navigate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/navigate/navigate.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateComponent", function() { return NavigateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/img-service.service */ "./src/app/service/img-service.service.ts");



var NavigateComponent = /** @class */ (function () {
    function NavigateComponent(imgService) {
        this.imgService = imgService;
    }
    NavigateComponent.prototype.ngOnInit = function () {
    };
    NavigateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigate',
            template: __webpack_require__(/*! ./navigate.component.html */ "./src/app/component/navigate/navigate.component.html"),
            styles: [__webpack_require__(/*! ./navigate.component.css */ "./src/app/component/navigate/navigate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_img_service_service__WEBPACK_IMPORTED_MODULE_2__["ImgServiceService"]])
    ], NavigateComponent);
    return NavigateComponent;
}());



/***/ }),

/***/ "./src/app/service/img-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/img-service.service.ts ***!
  \************************************************/
/*! exports provided: ImgServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgServiceService", function() { return ImgServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImgServiceService = /** @class */ (function () {
    function ImgServiceService() {
        this.imgs = [
            "https://lh3.googleusercontent.com/s5eSSBlB4IRr7sFRAgxEMP3rSznftpkU-G0I7Kwn2Ndpia0nYzMMV-baVouxPELatM9L4XcAyLWycERLomcXgkfhJ5Y2NUC6dFV8xIB1CDmO8ZBUOrRK2ZkJl-KXCnt53Pi5XufrvMoirkqYTIweYG7e3_5Yje6rkelbk3Nb6r-GTFGRoyX1ZpFSrth7AEMz4hifNkflo5UuPyIF4EYWRQilKG70WqKwAQKfyOZ5jYGfW_4IBG78TXL-t1K1m2we_qbz27hDLXd5TfEU1uhMXuON0bwJALGy-26nOvquT8pWTw7vRz-PawjHsg0Jz5N_if1mEuxuJ6sO-oIV7bzkR5apBmpYrhe4pi-cE_wQovCljy0PNko10d_i4kO50undcrebBUyVvy4_FdxUNPtihYN84cftaR5CywNjSRmunp4V0oAsNaKoBtG2fyJNrEe0X1VBcJOlSrLvJ-IR8Ab7iUMiD6cz2BVGr8RYqB5ehdVOaJMSeNr0ooxenGkxe0Cpnpp3hjzUXYCnEx-DmHPkknYK-1GfkYwZHc4oKIMGuNIH9kVgcKl7do11fndYOEul-JRFvJWOjErGFEBk7N_tjBmAKxHlxqpfKb16WDfwZ6EyIFmnUN3ZkRBUvHYFLGK8Th1sGvJp-s6AYkZpACLLeqdvvJslMoj_AHLQTqtrxxkbn8VCMgQPHmA=w847-h694-no",
            "https://lh3.googleusercontent.com/g8VgVOzwRJihJPYxbHwoKRMqds7_TumJfBhW01Mc5Wfi1O2U-dfNPafN78DnQAswFqKY1FfqbIH4ZfCW0v8bovAM6DQdptUb5y6Y1fdk6Wzv4BF0VFQHWHMjhJ5tqxPyBSmXFb8ORdYsgmFYmn1JhPCe2sdzutFZYB7KoHovDpAnaLi20_McEtW1RgbZ5j7CV2oh0Lu6_i8Nxu7VRBmzIIPkPt1PaSEe5SnIlo4tmqBIw7Bnpw52QFiuOtrodWOsQSjBKal3PCWlOOCCHj3zz4NgHZLGv9sSpOlrdcJXyU91P6r3lK8-mvTuXvuzvjqOhGiVfwAXIbxoxbs1cs4k_oZ5A8w-u3OJVhqchjZzHvfS8oZPWDc3UKK3wur1FwMTODXaht-v0Kytyz0nZmEK3yQtoEDc2FX8tfB6Dj3B3LTAFWchcLXTIwuDf44V43qsBuHg4f6q9AeE2-6j-i_VSGzcsER_nEPFpzXNEZP6Epm8JqeXskI6rgzVP1P93CWvjdM_bLrG3YnSA_DsxT3Nl7Vuq2vxejW8Tsj5UTzAZ2B1CR8LdNL3ucMio0vHCRkvmpNni3Yu2-qbztEYvVZzumTnDKHbuQyhSx4A5xjdQUxjGxr09nfbaXPi_04gic_d63JskjYdqHUs5oxmUvN_PfQpHbTxQ_hwQkGGNzx9TbqaSBOR990u4ng=w1442-h694-no",
            "https://lh3.googleusercontent.com/7dhFpzXECm4rjO1tRBQ-ZM3i3BEpvvaE-vIUgOIZ0wEYx3L39t3YCBvj7Ooa1FIWxJWbz_1pu6fnLf14ZOTjP6TWZI49yvBaBu9YZeRetrHlqs7bSY961fl08E_CPpNqwJ50VL1WJrTTjQ0r2You-IzAf9KOvEX74OHjnSEBFCqPb9xcDp8gNiNBqf-P5A0od2sow2Nv9b9an8NSBe1WnUOTgNHF4eJq378votZhAcBKTN3gOUy9dWubbEIdTfryjzEnAif9h1PLtWZLXRlpKSjf0Xupbs9agevJVrso1aHZIB1EbXSlI0SrSH10ioK0jsEYSRj9TpfRV9J5QQVZVOjZk1a-K86nowM9ZhnWW4BKgVTHE1vat3Orf29VLSEuhjvPKojNFb-6-NfBotPUddzJBUG4qOWao1lQD6a8JowWwvyOVJZRaWIlH6KpIvW56Szc25rv_63eTuG5NLdvwhldAdcOZIjojBDRbbse2GnTJg0GgfBV97dIxgmHajCxAxN4HmBQR84zluYZaWRI3fBx7VbWftfD_Oy0HscwZwHwg1sC5l7vSd--ARhmZh1gTiOGDUwmI-fFs-58s7FrkQiGLFtIhlP32R4YmNV55LVVRQ9ZhTqW53qoarWZVZTf0r3sNEuB0XMwDsjNU53-qdsmYm17Mxl5zeJk8fuvuD7QCuNHEyjQ-0E=w991-h694-no",
            "https://lh3.googleusercontent.com/3mtqFUDPjpdcxyms9mb_kd0Os-tkxZFagSwvZNVFy0DpvnQH7981OsNtAwHgsQvc594XXVN8kdut71Gy-gJZIbgV4TRzCbkaZPGYcdrLGGPUGBiJgnWcf6tnA7krz9yDhy8Pszla5OMZFgQHneyhLGLLDUAkKwfbn4YsZw18isU5UgbwiFJPA7DIgzWSSMLaQQWbePvBdnmlZqk6aUhw0aCdKIoQq8gpB9CNykSAtr18VexzQ_ZalfKQ99DQfG0X8yNqc9riTWs078n1-UqK9VmEsWgjkowGyNiGj79N_-X0AyUOhR1GsxEgF1ydR3hi7fI1FhVDov_cxJxmw1tqtqczMzQRTEpKgFU3kihzzz_OcF56SKv_cVUq4ALux5DxcIg9mCAzI39Jihtn7rTZl6TGSVqEKwuVUPm_Z6Nc0eqLbssNqzBwMKMjKRs7MrhRG6EUEnA9zI_mBBxWJjvDsxf4zCtU2cX5xpkgDZUqVkXNzRvAvBVv8P2rGROI2-zAceAaK2kUcXreVl7-xctKQCfCx5-2jGwQ8f1jdP31G8Fc0TdGNn4er0Q-RSihAir7ns7YmR7elB8cuTiEcVAy8p6lz6CEznHhbSkZHf5OSetdXkymrj7e7wWYkofZvti1Tgd2_OP2kPsXmrwX7eW1I_iNDX0IIF1aCJ0-GDA9bUGVCNOylwpiGDY=w542-h694-no",
            "https://lh3.googleusercontent.com/y0uikSdzLRhixrtWWPmM7DfR6_S-_TWLgZ1xusFLCou3-65sD3-ioCwvNNd41mIbBLWE3CLtQ4d7iVKIdr9jJPC0b4q7E14ppp1_RXi_rouhPdIJK2S3LGV3sWjqTN0owJ00oh6FxVU1h5_mWNQFYCpTlvahhzfUYSv0izEiSlV3DR3NJuU6SZJxjXVLOqFqcoirN0LKfE0Ao0ojG6dzrt9KrKAuuXI6hEi2aixC5V1g06fYEChRphTuXqdvH4CHxjAca39Xw0rEk5aMooY2yomcEUOXY4kz3yX7w88NLAWN2vPG2211fUZWq2rkFmtrqiCWNye2q2Vl0Jw4Q2DlxIStNXsiTQI_OIIRx4kTkazq4WOrB6Dmf2U7j73IYX25zYUx7GMnF2KFk7PEZPPTy_dTGpZ3H7lzymJvNvKfzegiI1MaGOZzYFn0penNZ5QG4v-shkszPf9irL4hD_hwo9fZtG-i0Qlrm6O55aJapR4H6kEufrIq5KF5qxsY1_bcF0ceoCYPHZAvvQnrtXvD1VUQeZkQQOMldH021sVOQb-Cn_w2Wjcud_mz4D1r6OskELlU540UCeDDM8xE0QIaHKNVYUUa9kGQAOAY8ugsuWWwDi-UPiKsoSIuZhHbjHbU92EDVM8Is2SsYbJggE2R-zhP8EUuvplEAciMXNRCgHN8Wefja93_p7c=w829-h694-no",
            "https://lh3.googleusercontent.com/3MLy2sDdH3xjlhBwqpaurmIREfdusI_Y8cI3ta5A5tCBSFxI9aWaebO2urFQjfGW35H9jcxQZ7-Ah4H9j1lChuN7nLrgusUhRXZyQkltgCJyCXfc-bb3Rfv9c3z5lc1EufRn8B0rnWNagDO8P1OpWH2Cn_c5yb5gJskfWwgVIHMqBsCL3gBgRUMA5TBeZgiwB15Tc62EcbV7Cgw7zgCMSGPREOOkYfW3cE1cAjKFUMT02kaWQ6k9IotBMgjGhForcB373XgKVLQ6TtOmGIhNp6_sckmVtIAT7lrPc97PVLOijX4qUEX0yqUNMTX0yWda8EihlpEyI0IKUg8831mMKhThy28V0RkvAkJL63zXeCAw_irqnRx1jsuVyZ1GFeKg26VUDn9FB9Bi6NwbPwemLQgUa_WvigWxQk1HgeZemB3vEOIKhuOritMO_piUgmLzWZsQwjRB9IzXStnN6psEH1gVVTU8Q4lnEvrlBSG6QHnmP3rnqwbAgQcFWFYPappcj4vjLG8mRWtahvSihEsw1STipGzNKPayLH9wZA-HPEXq3EjTtCNZm4AYHIZRVhdmiKgVKQb3buqrnS9nd4Cfx7Q5Ud2OiYqCkx8Q-BPlfrVqeWJdAPEdukvhA69tKtHO21CQw4xrhbDG186D2BZYPKltsqL9cIU8sUTJl1qJ-T2yS7rvLofcjjk=w1234-h694-no",
            "https://lh3.googleusercontent.com/vS_zDWxa4Tioajcc--3cww9cCysmozCfyF5hx5eX5w8bpF4LTtX0Wh_vLBolgQr4qf4duPMa9FmA3bR4969ObZQzRpM_801hrMKBrxWSbwkrGlFj0lOBFWTsG6mwtRpBZEbngF9cxSBhC3QTap-SZC1VhTc6txb9XkZBtpCSlNCSC4xCA2EOTN5nRzDpMlrLXOQTz73tdAf6HabWvHPzI3S42nEn_eX0Jb-Ijafhs_Gi2DrzDvau7tADcuoKn-3WVOZGHxWqhnAQZD3vnQOCTUXmbisVDYgrob7ubiIRTfUIYASMeDjGD4XVIIoQ8PEH0MfPIqpqoyP7r3OnPzlzIzs6gdUlO5tA3Yh3R4vsdnkv8EHT27vW1bJ3a3UbYAedEFrSqw6i-ZlgH-RbLr-TfLzKuC7KMsw9Ir_u7jfTOGJdXs0-rycr2FKoeVd3OLOfHpe7xk7jV7sYus3l2Asdyjqnrr-nka9KrvP68tD0nfeQo4_w65Il4xMQ1j3j0KJgQJz90CG2UADvUIthVmRBQBJje2nX52l53agaUHeJbxv1TWpto1mvYGZpGhUnpgwLIMs58WtFYL230-oDvmhbTazMmEhjDiko17NHZsNIF9ma3b9Sfmo-S6iLn85MXnY7xEgut-Tbj7FwvKAiT9Wovlgg-idhVSKobScVtOhstHN8WBkvHUA7dn8=w1234-h694-no",
            "https://lh3.googleusercontent.com/GABRtc2b5OiGF2IqWNxQgxSK_BaAlkuDWdnzt3y6iwCofpMyB5Du7Uy1HZXP4-PZdeGThZvkaMcR8pbzH1NEDMwPcXgFkqmcKuXTFbYFZfwMLHsLSHpAxf3_C0pbhWqnN5YtZL2o3ketSJICNNXDPSdY0jJtxakO72XXL9Eh44YM2P8nTqSVJRoh6jTIOACyw2JjSZEZKpQtEJMtn4gSILHWWmSkGK9xxP_ByQ0J13hDwR7tKzX0hCOvKc7iyYcJVQEOeVaJNlhDjCa9heCQw1l_C7obqGJRrGpQbBnk-3RtMje_tBN5QFjJo1wENBLLTZV5FP_YluE5tMuH9qowsO8BSP-teG7bG840wYZUCiDlq0xO1M_gUYxpUl-D1WSUruATtgZzKGRsvxB21wd57W8jXCksodaulvLxAXZYfhfS-N_ZKuLT65M218t-NLZMH6MSxGngYzLgbLMFeH94dzt7jDZ15zCUV8mWJFW5HtJw3F6c-Gh2ggKsjUviFsa17e4bsvIonXc2bydb6X8N-fmK1XGThPTcM2oNrkAX-4JezqsHZZH5yJpB1mHTeCyrcowbmUC-t3NznWXVZ3tvO3bvQzhVnVbj9B1rZPwloTST0p6e7cmysLby9k1dyovYvFWhNFLnUfgMl46IPOEJsA-6Ol-ICxyZaYae-XwgTHclFF1FiOm2ep4=w391-h694-no",
            "https://lh3.googleusercontent.com/GmzMt19DP7K5n4O9gVYH4BtgAnepg_aXl0_0QQyLdLz1Taa5chg_BBpkCexxWxJgepu_o-Ip436cYacND5gtEEiqUaTd54-QX_kFG0kKBtT2KUyzrrnygOHuY71faqvYfpWa-eF9F42XBZIpm7k8HX3P6S2L5Oc-xzAcPD0_9qAlfSoJcnHXPZp5IlV9RyWwtKkvemU3U-X-sBXwEvw8vxMjR-doGInljBZHj8tU6cxMh_CFZOI3iEpVpgg0Ufos1S0E7a_E2Qw4nm9HDapqPgksk3vwDsSB14z90tilQA4oWw8ZIyTA8zCAH3ewBjuSWdhuoxy9rHP7KKXPKKwYBmI2ckSDiSXZx6axZFqbX-xz8-e_O0YD31VhogElPEEInH0RoPv2T_OZKsX2Qav0SUlZf5rhii_rLeatqRB32bvWK5tC3wASCPRAHsBCS0B7SbRMgZT7P64lufRBK58868_RctNyLPrFZm7xLVOqTsxuBWGANL3jKFsdPZRP4QET5I64wJZE9lrs1i0or4q2jYUph8KhhwWCUlR8XEoEMEmthC7CqRU6g_93-P-ntE4B5qKutdTbAEv0wVmSW8P5sRJM-0RhqMA2ef56etSbwqYIB0Khv6EgtcMTlL4H0uUCLhepfk4DmQM6003ETQRqIj1E1gDamQ3GcwC5djLZLaqtQve-zb3zCLE=w391-h694-no"
        ];
        this.panorama = ["https://lh3.googleusercontent.com/Piv1zYno6_f6ThN1nx9Tn-pzwJNYRYAyJdoqZB7GfvdnJP0nGwALRBjNTksUto0VM8m40YsvOa2tXWbJVIMC2TRAntNkAEU4l_bwefyEh_sFHgTJp456GrpVr4zp44TpmZu3LtD2IOj1atP390fQGnkxVh6ssBnZXdRfzVzOCj3BH46Mtr0JDybZqCAZ9XWJFeLdcpS25kY3_EcLKdYnXghUMuOy_vMfenCMdWGoJGgQJweed_dj7ZfvX69w9zB0Da36KjuSkvUvKoQEUdRRm_M84q4kqo0kvO9dNoFvIcbYN-gFXhnuWoAqYaZt75f7CUPUOBu1XvSgAY-YZ570HMRMIzX4ymM-owVPgJlid27vxaoixBXCGqMO3W-3vJQlL3hfB-W0tHqcySnxaLtGa1cI80wA-HEUX8SKd0iy94dcOrHK_O6N-Tl0CAaxh_uu8eYh5THrohl7jolC9_ROzjBa5L62s8D5UvviJavgSbOQNUzEBqztE-15OHIr8ufLHJ0SEEw4dcwUPrm7YGkIYSzSaHGg2Y4Ek4Bhpmmn-gxQcdBQOJwwRT82lccLYUM0wjiR_NiHnyB5VebGKpoCsSWMGzsp9VWaMugKu-w_AMhaLKKb3A-EEtvdenmxO7P6N89kXovfSJ6TO_Vs-fJw-U94AKVZzWwW4ZaF2wffjlm5DXSFGGXR5YU=w1518-h630-no",
            "https://lh3.googleusercontent.com/xX31XHVeVncvyjKKNTqXDM_8mEjRk5cyRfyuHQvuZ1hIDhawYbpJcVZpYTYEGAbnIQMi3qoO7ACdMqu1XwF9hMEG1CZ4Rq2B1vWjnWSupshDZDHQ8Hj6a8WrxpgW40FF7L0awiPyL_WVqp7_TU0PaP048emHPslVjq8ozbGabQSrc_dQjNVuM4wr6lLDr8qBrCCAR1ig2wfM1kP4eSgzF1lgLU8OspzlJSv6Ge-io8idXr3UDktYOB7t7d-EPHEMm0w0O13Ni-T5Aak8v-WbEidifZr4QUwze0vhCJE1SH2yAcaHqin0QhmRWfzLUct8K0UQUhXvthjqS4AcYzRubBAyAJjfFKWSdcN1NU34fZLfUFI9etRNrukCkdDce8GjdbUhM7fBD-fIEl3dqT8yLVCLVH05bu4TvqjKQai-DSKQiXP53TcSELItzUi6oV2kWeTimgh03Om4sTgkl4OmcQvJJ58BvS8-snkBO0Yj_k75N-LNHCl0BOB4kGPXK4H1qFRhNW7r_6rcIjFC0lnPy0vWFTejVr2WNGIvuZrhn6kZro2Y626P1IoksHJZXLhgSXROevPWR5X2wGTjdM0wm9wx7-tIRvD-ObD4z-_dWUX4lorCTxf6pqK5qA6R5CY2nU80IjhXW2Oo2ZYSJqjhWLNsvZ5pNMthiXVrkO96_dIu_q-_7CBEYPk=w1518-h685-no",
            "https://lh3.googleusercontent.com/1fbzX4WUIqUc_KL0Q6WnvQoFzNhNY5kn9K6gUpe87BpcphDh_vzxrA2GE089A2nA_XSUJXQQYRJQqXy8dUj-f868HfKQ5mtIwWBhvnNv2jpiobBY_dwFdR4v9bAZ9i4PZTfz3cTYP0Dz-sp2QA0YUxTiJ_WrqkxXTYfwa8CBv-0XW85PsP0hH1kgQt0V8vepAIm2TF5v46knR_bGgmbALafRtDcjql4UBhMUeE3_pnk6ySaPxTI42RhC1-TfQTFuBpKgmZHTR0bv3zBiDTM24dhtLI20U-ZJAsyZwdeWoUH7SJ_Hs-g0vQ4jdUpEFknPjVL5MNSFGpRjP8a8npcpW_B-JMgxAdm38tWccpDskQf3z9mN3Y5YG4E2xCgIOJqe1syCCwNDtTVeg9_Ymjrs6rL70ODw-FjywisaKtHx8ufKrsAEVtAwUcxDRhnNRaWUJ1rPGvrnuAXJg4ESG46PkOG_35Wx3YvLjqNI4rW6MrEnibY0MZX_svTdOWsDnA9E50CuoOjxSUoRtIs3l6v7WMQUEZYzp5GaskyoRsgoSeHycQM0W_tVpAkeMP3FQxKpviK5L7IWqmQZv0T-_Vm0H_TSHDsLZwaCY_Kf5u5OkC71pwc4Zr54vkcmkmdfw3Ao7uL6MsVziDP1yXiNppWJYLUe0WdkKsYpgrcXcTZqPumcDYwCKBuS9p0=w1234-h694-no"
        ];
        this.icon = "https://lh3.googleusercontent.com/L517veXCn7sAgyqpQinwbriq6P_y1rxiRnwMlX4gY2oztG9qHi4lnK6FAv7gkQRDZ_ygpxMNi9PXGke3QC0a85pcmxSzVOzoIg3iMWCW7mCcm1vbPNiKDRF1FaSdNhRqwGI3yvsgqo_QHs01g1TP1pc6oXzLrNxGHCyBsDdSSR5cB9I7offjlSX2dt68LRPmyPq3nBFyg8cahk2xszuT1j-TfyDnv59OMxRDvTevGCc65863ajMLAj5xpIvCIHU7fJtSpTQRVPWUwGqo__vAo_PFcyR-QYuPWsbdK0JBvY47WpP4prKXigUCtaCVhbF49IqTTtuzbC0W3-6CsKgCkU5g7oFXydiCphkXmT1bKHXSHcUf8DfUqtlKKUTYD-MYWYiZhMRdRJHqi1pWeJqx_Q6etaymuY9ZgCiVw2pM4Cy0-HXBNfnjHO-Cubo3qC_y4PApOX0GYlWxC6WRx6J0Kt2lUd8qRKuxS4LJzbrGDyoOdUQDbrSne94pCuMQKPsLFj6XXhnagnEGUQrPuJ8UIZ-EHZgSI-22UA-xrdTVFtdwfmbpPES5PkT-XPq8vO8g8bDS99MWrChGHvDaOfFI8ngOn1T-PPVc4XmeqHv6y07xzCURffaORN8ZMQfeYLEDAxUJBYJbXXw3JgULF-gIgiK7_GGYf6lUkP3FJ2oO6tu_2zO4R-TWgeU=w545-h251-no";
        this.evyatar = "https://lh3.googleusercontent.com/zaIbNc9LZoC7-tIjvFqdVNveoxuqXSqwshiKpC7XCaP_tTiaiUO651jg8hfN1wDVD8MyoeFbINnxjmbscumKHPrdZKm2tgBJB4-xWaksgp_sGCHVBwv-MulMMIPTYXnTd5rIjge9Ae-kzobg64wFjhefBHdgRu8O420ajVKVV6vaNiWGXGW8dyNoDfuJI3VcywfvwYheiCLCRpXJbBUgPacsus1BtSmWfIApoIXETkiOpYoUg920VM2X8nzkQM_B6snYiLUZXYswtKK8DXqLFfykXESRBwxk_PsLFEQAPw8vpYdJJPh7K8aftUJSsjrhlKeKprejY-1J18wX42eAqDGLWnLkLcb9thoOHQtLt8GeSrusiWJ0G3duSXjEZHDoF5LZUR6ykQQARFhXq7PUwXWgp8x434iZfsX1hApceQrXpTf2Wgz65ljilG10ufAMqjC4XEUjkOI4ZtCcyaxSOJ_EsOnS1y19IRx-bnVFzz8etm0rbzQtCUvRLE9Qh4TtmRRJKphGMcliJXmhquqmt9W9BFTA6A0OZN6uWtcYL3yPgmkRTuRhdfGmO_ehsYcWNBa6xcPC_qPYJNuTf4Lx_HS95OYeZzsGdmjQTR1EmvnctFM_pZuwry-F_HZpaKG-W7f_RaMlh0Nq7rlpm2wetsffaeou3wW2b2zHfqeIDm8vhktliLyxHHw=w719-h694-no";
        this.isShow = false;
    }
    ImgServiceService.prototype.clickImg = function () {
        this.isShow = !this.isShow;
    };
    ImgServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImgServiceService);
    return ImgServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\evyad\photographer\Photographer\EDphotographer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map