webpackJsonp([7],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasPageModule", function() { return RutasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutas__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RutasPageModule = /** @class */ (function () {
    function RutasPageModule() {
    }
    RutasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rutas__["a" /* RutasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rutas__["a" /* RutasPage */]),
            ],
        })
    ], RutasPageModule);
    return RutasPageModule;
}());

//# sourceMappingURL=rutas.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasPage; });
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
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutasPage = /** @class */ (function () {
    function RutasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detallerutaPage = "DetallerutaPage";
        this.searchQuery = '';
        this.initializeItems();
    }
    RutasPage.prototype.initializeItems = function () {
        this.items = [
            { 'id': '01', 'title': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'tiempo': '5 min', 'recorrido': 'De Santa Tecla a San Salvador', 'distancia': '2 km' },
            { 'id': '02', 'title': 'Ruta 101 B', 'tarifa': '$0.25 ctvs', 'tiempo': '20 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '10 km' },
            { 'id': '03', 'title': 'Ruta 30 B', 'tarifa': '$0.25 ctvs', 'tiempo': '1 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '0.5 km' },
            { 'id': '04', 'title': 'Ruta 101 D', 'tarifa': '$0.25 ctvs', 'tiempo': '3 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '1 km' },
            { 'id': '05', 'title': 'Ruta 108', 'tarifa': '$0.76 ctvs', 'tiempo': '10 min', 'recorrido': 'De San Juan Opico a San Salvador', 'distancia': '5 km' },
        ];
    };
    RutasPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RutasPage.prototype.openItem = function (item) {
        this.navCtrl.push('DetallerutaPage', { item: item });
    };
    RutasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RutasPage');
    };
    RutasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutas',template:/*ion-inline-start:"D:\git\TUBUSAPP\TUBUSAPP\src\pages\rutas\rutas.html"*/'<!--\n\n  Generated template for the RutasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="rutas">\n\n    <ion-title>Ruta de Buses</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar placeholder="Buscar Ruta de Bus" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/bus-stop.png">\n\n          </ion-thumbnail>\n\n          <h2>{{item.title}}</h2>\n\n          <button ion-button clear item-end (click)="openItem(item)">Info</button>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\git\TUBUSAPP\TUBUSAPP\src\pages\rutas\rutas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RutasPage);
    return RutasPage;
}());

//# sourceMappingURL=rutas.js.map

/***/ })

});
//# sourceMappingURL=7.js.map