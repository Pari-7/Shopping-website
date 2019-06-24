(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addproduct/addproduct.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"name\" type=\"text\" placeholder=\" Enter name of Product\"class=\"form-control-sm\">\n<br>\n<input [(ngModel)]=\"quantity\" type=\"text\" placeholder=\"Enter quantity of product\"class=\"form-control-sm\">\n<br>\n<input  [(ngModel)]=\"color\" type=\"text\" placeholder=\"Enter color \"class=\"form-control-sm\">\n<br>\n<input  [(ngModel)]=\"image\" type=\"text\" placeholder=\"Enter image address \"class=\"form-control-sm\">\n<br>\n<input  [(ngModel)]=\"price\" type=\"number\" placeholder=\"Enter price \"class=\"form-control-sm\">\n<br>\n<input  [(ngModel)]=\"details\" type=\"text\" placeholder=\"Enter details \"class=\"form-control-sm\">\n<br>\n<input  [(ngModel)]=\"seller\" type=\"text\" placeholder=\"Enter seller \"class=\"form-control-sm\">\n<br>\n<button (click)=\"addproduct()\" class=\"btn btn-outline-dark\">ADD PRODUCT</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\n<app-carousel></app-carousel>\n<br>\n<div class=\"row\">\n  \n<app-product *ngFor=\"let product of products\" [product]=\"product\" class=\"col-md-3\"></app-product> -->\n<!-- <app-product [product]=\"products[0]\" class=\"col-md-3\"></app-product>\n<app-product [product]=\"products[0]\" class=\"col-md-3\"></app-product>\n<app-product [product]=\"products[0]\" class=\"col-md-3\"></app-product> -->\n<!-- <app-product [product]=\"products[1]\" class=\"col-md-3\"></app-product> -->\n<!-- <app-product [product]=\"products[1]\" class=\"col-md-3\"></app-product>\n<app-product [product]=\"products[1]\" class=\"col-md-3\"></app-product>\n<!-- <app-product [product]=\"products[1]\" class=\"col-md-3\"></app-product> -->\n<!-- <app-product [product]=\"products[2]\" class=\"col-md-3\"></app-product> --> \n<!-- <app-product [product]=\"products[2]\" class=\"col-md-3\"></app-product>\n<app-product [product]=\"products[2]\" class=\"col-md-3\"></app-product>\n<app-product [product]=\"products[2]\" class=\"col-md-3\"></app-product> -->\n<!-- <app-product [product]=\"products[3]\" class=\"col-md-3\"></app-product> -->\n<!-- </div>\n\n<app-signup></app-signup>\n<br>\n<app-login></app-login>\n<br>\n\n<app-addproduct></app-addproduct>\n<br>\n<div *ngFor=\"let user of users\" class=\"alert alert-danger\">{{user}}</div>\n<div *ngFor=\"let user of newusers\" class=\"alert alert-primary\">\n  <li>{{user.name}}</li>\n  <li>{{user.id}}</li>\n</div>\n\n\n<div class=\"alert alert-primary\" role=\"alert\">\n    A simple primary alert—check it out! -->\n  <!-- </div>\n  <div class=\"alert alert-secondary\" role=\"alert\">\n    A simple secondary alert—check it out!\n  </div>\n  <div class=\"alert alert-success\" role=\"alert\">\n    A simple success alert—check it out!\n  </div>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    A simple danger alert—check it out!\n  </div>\n  <div class=\"alert alert-warning\" role=\"alert\">\n    A simple warning alert—check it out!\n  </div>\n  <div class=\"alert alert-info\" role=\"alert\">\n    A simple info alert—check it out!\n  </div>\n  <div class=\"alert alert-light\" role=\"alert\">\n    A simple light alert—check it out!\n  </div>\n  <div class=\"alert alert-dark\" role=\"alert\">\n    A simple dark alert—check it out!\n  </div> -->\n<app-navbar></app-navbar>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"data:image/jpeg;base64,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\" class=\"d-block w-100\" alt=\"...\" height=\"350px\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkHJJSEx_393m3rBm_KD0aCNo8f4HKSq8jEMi_-y9UhwrPtOilg\" class=\"d-block w-100\" alt=\"...\" height=\"350px\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"data:image/png;base64,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\" class=\"d-block w-100\" alt=\"...\" height=\"350px\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  cart works!\n</p> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/deleteaccount/deleteaccount.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deleteaccount/deleteaccount.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  deleteaccount works!\n</p>\n<input [(ngModel)]=\"email\" type=\"text\" placeholder=\"=EMAIL\" class=\"form-control-sm\">\n<br>\n<button (click)=\"deleteaccount\" routerLink=\"/\" class=\"btn-btn-outline-primary btn-small\">DELETE ACCOUNT</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input [(ngModel)]=\"name\" type=\"text\" placeholder=\" Enter name of Product\"class=\"form-control-sm\">\n<button (click)=\"forget password()\" routerLink='/' class=\"btn-btn-warning\" type=\"submit\">Forget Password</button> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/getproduct/getproduct.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getproduct/getproduct.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  getproduct works!\n</p> -->\n<div class=\"container\" style=\" padding:20px \">\n  \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          \n          <img src=\"data:image/jpeg;base64,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\" alt=\"image not avilable\" style= \"width: 416px; height: 416px\" ><br>\n          <button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\"  >Add to Cart</button>\n          <button class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" >Buy now</button>\n      </div>\n      <div class=\"col-md-6\">\n\n          <table>\n              <tr>\n                  <td><h3>MacBook Pro </h3></td>\n              </tr>\n              <tr>\n                  <td><h3>Rs. 225000</h3></td>\n              </tr>\n              <tr>\n\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n              <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                  <span class=\"col-md-4\"> RetailNet</span>\n              </td></tr>\n              <tr>\n                  <td class=\"row\">\n                      <span class=\"col-md-4\">Highlights</span>\n\n                      <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                          <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                          <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                          <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                  </td></tr>\n          </table>\n      </div>\n  </div>\n\n</div >"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p routerLink='/login'>\n  home works!\n</p> -->\n\n<app-carousel></app-carousel>\n<div class=\"row\">\n<app-product *ngFor=\"let product of products\" [product]=\"product\"></app-product>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  login works!\n  </p> -->\n  <input [(ngModel)]=\"email\" type=\"text\" placeholder=\"Email\" class=\"form-control-sm\">\n  <br>\n\n  <input [(ngModel)]=\"password\" type=\"password\" placeholder=\"password\"class=\"form-control-sm\">\n  <br>\n  <button (click)=\"login()\" class=\"btn btn-outline-primary\">LOGIN</button>\n  <br>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" >{{projectname}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" >Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/addproduct\">Add Product</a>\n            <a class=\"dropdown-item\" routerLink=\"/deleteaccount\">Delete Account</a>\n            <a class=\"dropdown-item\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" >Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\"  tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n      </ul>\n      <div *ngIf=\"!isuserloggedin\"class=\"form-inline my-2 my-lg-0\">\n        <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"> -->\n        <button routerLink='/login' class=\"btn btn-warning-outline-success\" type=\"submit\">Login</button>\n        <button routerLink='/signup' class=\"btn btn-warning-outline-success \" type=\"submit\">Signup</button>\n        <button routerLink='/getproduct' class=\"btn btn-warning-outline-success\" type=\"submit\">getProduct</button>\n        <!-- <button routerLink='/forgetpassword' class=\"btn btn-warning-outline-success\" type=\"submit\">forgetpassword</button>\n      </div> -->\n      </div>\n    <div *ngIf=\"isuserloggedin\" class=\"form-inline my-2 my-lg-0\">\n     \n      <button (click)=\"logout()\"routerLink='/' class=\"btn btn-warning\" type=\"submit\">Logout</button>\n    </div>\n    <div *ngIf=\"isuserloggedin\" class=\"form-inline my-2 my-lg-0\">\n     \n      <button (click)=\"deleteaccount()\"routerLink='/' class=\"btn btn-warning\" type=\"submit\">Delete Account</button>\n    </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div (click)=\"showproduct()\" *ngIf=\"product\" class=\"card\" style=\"width: 18rem;\">\n    <img src={{product.image}} class=\"card-img-top\" alt=\"...\" height=\"180px\">\n   \n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{product.name}}</h5>\n      <p class=\"card-text\">{{product.price}}</p>\n      <!-- <a href=\"#\" class=\"btn btn-primary\"></a> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productdetail/productdetail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productdetail/productdetail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  productdetail works!\n</p> -->\n<div *ngIf=\"product\" class=\"container\" style=\" padding:20px \">\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          \n          <img src=\"{{product.image}}\" alt=\"image not avilable\" style= \"width: 416px; height: 416px\" ><br>\n          <button (click)=\"addToCart()\" routerLink=\"/\" class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\"  >Add to Cart</button>\n          <button (click)=\"buyNow()\" class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" >Buy now</button>\n      </div>\n      <div class=\"col-md-6\">\n\n          <table>\n              <tr>\n                  <td><h3>{{product.name}} </h3></td>\n              </tr>\n              <tr>\n                  <td><h3>{{product.price}}</h3></td>\n              </tr>\n              <tr>\n\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n              <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                  <span class=\"col-md-4\"> RetailNet</span>\n              </td></tr>\n              <tr>\n                  <td class=\"row\">\n                      <span class=\"col-md-4\">Highlights</span>\n\n                      <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                          <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                          <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                          <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                  </td></tr>\n          </table>\n      </div>\n  </div>\n\n</div >"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"name\" type=\"text\" placeholder=\" Enter name\"class=\"form-control-sm\"><br>\n<input [(ngModel)]=\"email\" type=\"text\" placeholder=\"Enter email\"class=\"form-control-sm\"><br>\n<input  [(ngModel)]=\"password\" type=\"password\" placeholder=\"Enter password\"class=\"form-control-sm\">\n\n<br>\n<button (click)=\"signup()\" class=\"btn btn-outline-primary\">SIGNUP</button>"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apurl = "/api/addproduct";
// const apurl="http://localhost:1000/api/addproduct"
let AddproductComponent = class AddproductComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    addproduct() {
        console.log("Product added");
        var dataobj = {
            name: this.name,
            quantity: this.quantity,
            color: this.color,
            price: this.price,
            image: this.image,
            success: this.success
        };
        console.log("Data Object ready", dataobj);
        this.http.post(apurl, dataobj).subscribe((response) => {
            console.log("response from addproduct api:", response);
            this.toastr.success("product added");
        }, (error) => {
            console.log("error from product api");
        });
    }
};
AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: __webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html"),
        styles: [__webpack_require__(/*! ./addproduct.component.css */ "./src/app/addproduct/addproduct.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], AddproductComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deleteaccount/deleteaccount.component */ "./src/app/deleteaccount/deleteaccount.component.ts");
/* harmony import */ var _getproduct_getproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getproduct/getproduct.component */ "./src/app/getproduct/getproduct.component.ts");
/* harmony import */ var _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productdetail/productdetail.component */ "./src/app/productdetail/productdetail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'addproduct', component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_5__["AddproductComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordComponent"] },
    { path: 'deleteaccount', component: _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_8__["DeleteaccountComponent"] },
    { path: 'getproduct', component: _getproduct_getproduct_component__WEBPACK_IMPORTED_MODULE_9__["GetproductComponent"] },
    { path: 'product/:id', component: _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_10__["ProductdetailComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



var apiurl = "/api/allproducts";
//const apiurl="http://localhost:1000/api/allproducts"
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'k2';
        this.users = ["Pari", "Saloni", "Diksha", "Poory"];
        this.newusers = [{ name: "Bhuru", id: 11 },
            { name: "Toby", id: 12 },
            { name: "Pearly", id: 13 }
        ];
        this.products = [{
                name: "ONE PLUS7 PRO",
                price: 30000,
                image: 'data:image/jpeg;base64,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'
            }, {
                name: "SAMSUNG NOTE 9",
                price: 70000,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvb7M9EJSJpos1gSixuuc2eAu2T2IVYvIkiPPh9ddG5Ec21bT'
            }, {
                name: "IPhone XS MAX",
                price: 50000,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxQ1JJSnnQ4hi9JLAGdwxp_mzN3AyczFhZU2kAVB_Bwm7bPhl-w'
            }, {
                name: "XIAOMI REDMI NOTE 7 PRO",
                price: 20000,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBosq-gHS7jNrWvos8ND5WWdbclBtPWFH0LWwZkwy-OnJbyz6pw'
            }];
        this.http.get(apiurl).subscribe((response) => {
            console.log("response from all products api", response);
            this.products = response["data"];
        }, (error) => {
            console.log("error in getting products");
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./deleteaccount/deleteaccount.component */ "./src/app/deleteaccount/deleteaccount.component.ts");
/* harmony import */ var _getproduct_getproduct_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./getproduct/getproduct.component */ "./src/app/getproduct/getproduct.component.ts");
/* harmony import */ var _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./productdetail/productdetail.component */ "./src/app/productdetail/productdetail.component.ts");





















// import { CardComponent } from './card/card.component';


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__["AddproductComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotpasswordComponent"],
            _deleteaccount_deleteaccount_component__WEBPACK_IMPORTED_MODULE_20__["DeleteaccountComponent"],
            // CardComponent,
            _getproduct_getproduct_component__WEBPACK_IMPORTED_MODULE_21__["GetproductComponent"],
            _productdetail_productdetail_component__WEBPACK_IMPORTED_MODULE_22__["ProductdetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot() // ToastrModule added
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// const addtocartapi="http://localhost:1000/api/addtocart";
var addtocartapi = "/api/addtocart";
let CartComponent = class CartComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    cart() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CartComponent);



/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.component.css":
/*!***********************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWFjY291bnQvZGVsZXRlYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/deleteaccount/deleteaccount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/deleteaccount/deleteaccount.component.ts ***!
  \**********************************************************/
/*! exports provided: DeleteaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteaccountComponent", function() { return DeleteaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var apurl = "/api/deleteaccount";
//const apurl="http://localhost:1000/api/deleteproduct"
let DeleteaccountComponent = class DeleteaccountComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    deleteaccount() {
        var dataobj = {
            email: this.email,
            success: this.success
        };
        console.log("You are entered");
        console.log("dataobj ready");
        this.http.post(apurl, dataobj).subscribe((response) => {
            console.log("response from deleteAccount api", response);
            if (response["code"] == 1100) {
                // localStorage.email=response["data"]["email"]
                this.toastr.success("Account deleted");
                this.router.navigate(['/']);
            }
            if (response['code'] == 1234) {
                this.toastr.success("send mail");
            }
        }, (error) => {
            console.log("error from deleteaccount api", error);
            this.toastr.error("Invalid account cant be deleetd");
        });
        console.log("user has entered", this.email);
    }
};
DeleteaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./deleteaccount.component.html */ "./node_modules/raw-loader/index.js!./src/app/deleteaccount/deleteaccount.component.html"),
        styles: [__webpack_require__(/*! ./deleteaccount.component.css */ "./src/app/deleteaccount/deleteaccount.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DeleteaccountComponent);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/getproduct/getproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/getproduct/getproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHByb2R1Y3QvZ2V0cHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/getproduct/getproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/getproduct/getproduct.component.ts ***!
  \****************************************************/
/*! exports provided: GetproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetproductComponent", function() { return GetproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetproductComponent = class GetproductComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getproduct',
        template: __webpack_require__(/*! raw-loader!./getproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/getproduct/getproduct.component.html"),
        styles: [__webpack_require__(/*! ./getproduct.component.css */ "./src/app/getproduct/getproduct.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GetproductComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



var apiurl = "/api/allproducts";
//const apiurl="http://localhost:1000/api/allproducts"
let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.http.get(apiurl).subscribe((response) => {
            console.log("response from products api", response);
            this.products = response["data"];
        }, (error) => {
            console.log("error in getting products api", error);
        });
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const apiurl = "/api/login";
//const apiurl="http://localhost:1000/api/login"
let LoginComponent = class LoginComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        var dataobj = {
            email: this.email,
            password: this.password,
            success: this.success
        };
        console.log("Data object ready", dataobj);
        this.http.post(apiurl, dataobj).subscribe((response) => {
            console.log("response from login api:", response);
            if (response["code"] == 100) {
                localStorage.email = response["data"]["email"];
                this.toastr.success("Login Done");
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error("Invalid login");
            }
        }, (error) => {
            console.log("error from login api");
        });
        console.log("user has entered", this.email, this.password);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.projectname = "The Phoenix";
        this.isuserloggedin = false;
        if (localStorage.email) {
            this.isuserloggedin = true;
        }
    }
    ngDoCheck() {
        if (localStorage.email) {
            this.isuserloggedin = true;
        }
    }
    ngOnInit() {
    }
    logout() {
        this.isuserloggedin = false;
        localStorage.clear();
    }
    deleteaccount() {
        this.isuserloggedin = false;
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductComponent = class ProductComponent {
    constructor(router) {
        this.router = router;
        this.product = null;
    }
    // name="One Plus7"
    //  Price=33000
    //  image="https://static.toiimg.com/photo/69440155.cms"
    ngOnInit() {
        console.log("mjhe kya milrha h", this.product);
    }
    showproduct() {
        var url = "/product/" + this.product.id;
        this.router.navigate([url]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "product", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/productdetail/productdetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/productdetail/productdetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWwvcHJvZHVjdGRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/productdetail/productdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/productdetail/productdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailComponent", function() { return ProductdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





//const addtocartapi="http://localhost:1000/api/addtocart";
const addtocartapi = "/api/addtocart";
let ProductdetailComponent = class ProductdetailComponent {
    constructor(http, activatedroute, toastr, router) {
        this.http = http;
        this.activatedroute = activatedroute;
        this.toastr = toastr;
        this.router = router;
        this.product = {};
        console.log("current route ki details", this.activatedroute.snapshot);
        var productid = this.activatedroute.snapshot.params.id;
        //var apiurl = "http://localhost:1000/api/product/"+ productid
        const apiurl = "/api/product" + productid;
        this.http.get(apiurl).subscribe((response) => {
            console.log("response from get product api", response);
            this.product = response["data"];
        }, (error) => {
            console.log("error in getting product detail", error);
        });
    }
    addToCart() {
        if (localStorage.email) {
            var requestobj = {
                email: localStorage.email,
                productname: this.product["name"],
                productprice: this.product["price"],
                productimage: this.product["image"],
                productid: this.product["id"]
            };
            this.http.post(addtocartapi, requestobj)
                .subscribe((response) => {
                if (response = "code==100") {
                    this.toastr.success("Added To Cart");
                }
            }, (error) => {
                this.toastr.error("Error in adding to cart");
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    buyNow() {
        if (localStorage.email) {
            this.addToCart();
            this.router.navigate(['/cart']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
    }
};
ProductdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productdetail',
        template: __webpack_require__(/*! raw-loader!./productdetail.component.html */ "./node_modules/raw-loader/index.js!./src/app/productdetail/productdetail.component.html"),
        styles: [__webpack_require__(/*! ./productdetail.component.css */ "./src/app/productdetail/productdetail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductdetailComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = "/api/signup";
//const apiurl="http://localhost:1000/api/signup"
let SignupComponent = class SignupComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    signup() {
        console.log("signup done");
        // console.log("User has entered",this.email,this.password)
        var requestobj = {
            name: this.name,
            email: this.email,
            password: this.password,
            success: this.success
        };
        console.log("requestobj ready", requestobj);
        this.http.post(apiurl, requestobj).subscribe((response) => {
            console.log("response from signup api:", response);
            if (response["code"] == 200) {
                this.toastr.warning("User already exists");
            }
            else {
                if (response["code"] == 100)
                    this.toastr.success("Signup successful");
                else
                    this.toastr.error("Error");
            }
        }, (error) => {
            console.log("error from signup api");
            this.toastr.error("Error");
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], SignupComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PARI GOYAL\k2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map