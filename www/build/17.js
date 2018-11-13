webpackJsonp([17],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallehorarioPageModule", function() { return DetallehorarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detallehorario__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallehorarioPageModule = /** @class */ (function () {
    function DetallehorarioPageModule() {
    }
    DetallehorarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detallehorario__["a" /* DetallehorarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detallehorario__["a" /* DetallehorarioPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__detallehorario__["a" /* DetallehorarioPage */]
            ]
        })
    ], DetallehorarioPageModule);
    return DetallehorarioPageModule;
}());

//# sourceMappingURL=detallehorario.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallehorarioPage; });
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
 * Generated class for the DetallehorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallehorarioPage = /** @class */ (function () {
    function DetallehorarioPage(navCtrl, navParams, item) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //this.item = navParams.get('item') || item.defaultItem;
        this.item = navParams.data.item;
    }
    DetallehorarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallehorarioPage');
    };
    DetallehorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detallehorario',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\detallehorario\detallehorario.html"*/'<!--\n\n  Generated template for the DetallehorarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="horarios"> \n\n    <ion-title>{{ item.title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-card>\n\n\n\n          <img [src]="\'assets/img/ruta_\'+item.id+\'.png\'">\n\n\n\n          <ion-item>\n\n            <ion-icon name="clock" item-start large></ion-icon>\n\n            <h2>Horarios</h2>\n\n            <p>{{item.horario}}</p>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-icon name="cash" item-start large ></ion-icon>\n\n            <h2>Tarifa</h2>\n\n            <p>{{item.tarifa}}</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-icon name="pin" item-start large ></ion-icon>\n\n              <h2>Recorrido</h2>\n\n              <p>{{item.recorrido}}</p>\n\n            </ion-item>\n\n   \n\n    </ion-card>    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\detallehorario\detallehorario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], DetallehorarioPage);
    return DetallehorarioPage;
}());

//# sourceMappingURL=detallehorario.js.map

/***/ })

});
//# sourceMappingURL=17.js.map