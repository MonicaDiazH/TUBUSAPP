webpackJsonp([17],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleperfilPageModule", function() { return DetalleperfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalleperfil__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleperfilPageModule = /** @class */ (function () {
    function DetalleperfilPageModule() {
    }
    DetalleperfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalleperfil__["a" /* DetalleperfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalleperfil__["a" /* DetalleperfilPage */]),
            ],
        })
    ], DetalleperfilPageModule);
    return DetalleperfilPageModule;
}());

//# sourceMappingURL=detalleperfil.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleperfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(118);
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
 * Generated class for the DetalleperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleperfilPage = /** @class */ (function () {
    function DetalleperfilPage(navCtrl, navParams, item) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    DetalleperfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleperfilPage');
    };
    DetalleperfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalleperfil',template:/*ion-inline-start:"D:\git\TUBUSAPP\TUBUSAPP\src\pages\detalleperfil\detalleperfil.html"*/'<!--\n\n  Generated template for the DetalleperfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalles de Ruta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n\n\n    <img [src]="\'assets/img/r_\'+item.id+\'.jpg\'">\n\n      <ion-fab right top>\n\n        <button ion-fab>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    \n\n      <ion-list inset>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12><h2>{{ item.ruta1}}</h2></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.tiempo }}  </p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa}}</p></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-12><h2>{{ item.ruta2 }}</h2></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.tiempo }}  </p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa}}</p></ion-col>\n\n            </ion-row>\n\n          </ion-grid>    \n\n      </ion-list>\n\n    \n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\git\TUBUSAPP\TUBUSAPP\src\pages\detalleperfil\detalleperfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], DetalleperfilPage);
    return DetalleperfilPage;
}());

//# sourceMappingURL=detalleperfil.js.map

/***/ })

});
//# sourceMappingURL=17.js.map