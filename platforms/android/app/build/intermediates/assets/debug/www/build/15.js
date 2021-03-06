webpackJsonp([15],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorariosPageModule", function() { return HorariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horarios__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorariosPageModule = /** @class */ (function () {
    function HorariosPageModule() {
    }
    HorariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */]),
            ],
        })
    ], HorariosPageModule);
    return HorariosPageModule;
}());

//# sourceMappingURL=horarios.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPage; });
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
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorariosPage = /** @class */ (function () {
    function HorariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.initializeItems();
    }
    HorariosPage.prototype.initializeItems = function () {
        this.items = [
            { 'id': '01', 'title': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'horario': 'De 8:00 a.m. a 10:00 p.m.', 'recorrido': 'De Santa Tecla a San Salvador' },
            { 'id': '02', 'title': 'Ruta 101 B', 'tarifa': '$0.25 ctvs', 'horario': 'De 8:00 a.m. a 10:00 p.m.', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '03', 'title': 'Ruta 30 B', 'tarifa': '$0.25 ctvs', 'horario': 'De 8:00 a.m. a 10:00 p.m.', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '04', 'title': 'Ruta 101 D', 'tarifa': '$0.25 ctvs', 'horario': 'De 8:00 a.m. a 10:00 p.m.', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '05', 'title': 'Ruta 108', 'tarifa': '$0.76 ctvs', 'horario': 'De 5:00 a.m. a 10:00 p.m.', 'recorrido': 'De San Juan Opico a San Salvador' },
        ];
    };
    HorariosPage.prototype.getItems = function (ev) {
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
    HorariosPage.prototype.openItem = function (item) {
        this.navCtrl.push('DetallehorarioPage', { item: item });
    };
    HorariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorariosPage');
    };
    HorariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horarios',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\horarios\horarios.html"*/'<!--\n\n  Generated template for the HorariosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="horarios"> \n\n    <ion-title>Horarios y Tarifas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar placeholder="Buscar Ruta de Bus" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/bus-stop.png">\n\n          </ion-thumbnail>\n\n          <h2>{{item.title}}</h2>\n\n          <button ion-button clear item-end (click)="openItem(item)">Info</button>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\horarios\horarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HorariosPage);
    return HorariosPage;
}());

//# sourceMappingURL=horarios.js.map

/***/ })

});
//# sourceMappingURL=15.js.map