webpackJsonp([16],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallerutaPageModule", function() { return DetallerutaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalleruta__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallerutaPageModule = /** @class */ (function () {
    function DetallerutaPageModule() {
    }
    DetallerutaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalleruta__["a" /* DetallerutaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalleruta__["a" /* DetallerutaPage */]),
            ],
        })
    ], DetallerutaPageModule);
    return DetallerutaPageModule;
}());

//# sourceMappingURL=detalleruta.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallerutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetallerutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallerutaPage = /** @class */ (function () {
    function DetallerutaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetallerutaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallerutaPage');
    };
    DetallerutaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalleruta',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\detalleruta\detalleruta.html"*/'<!--\n\n  Generated template for the DetallerutaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="rutas">\n\n    <ion-title>Ruta 44</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n\n\n        <img src="assets//img/map.jpg">\n\n        <ion-fab right top>\n\n          <button ion-fab>\n\n            <ion-icon name="pin"></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n      \n\n        <ion-item>\n\n          <ion-icon name="bus" item-start large></ion-icon>\n\n          <h2>Ubicación actual</h2>\n\n          <p>49 av. Sur, parada Terminal de Occidente</p>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <span item-start>1 min</span>\n\n          <span item-start>(0.5 km)</span>\n\n          <button ion-button icon-start clear item-end>\n\n            <ion-icon name="navigate"></ion-icon>\n\n            Ticket\n\n          </button>\n\n        </ion-item>\n\n      \n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\detalleruta\detalleruta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DetallerutaPage);
    return DetallerutaPage;
}());

//# sourceMappingURL=detalleruta.js.map

/***/ })

});
//# sourceMappingURL=16.js.map