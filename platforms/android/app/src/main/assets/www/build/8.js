webpackJsonp([8],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detallerutaPage = "DetallerutaPage";
        this.searchQuery = '';
        //this.initializeItems();
    }
    PerfilPage.prototype.initializeItems = function () {
        this.items = [
            { 'id': '01', 'title': 'Alameda Juan Pablo', 'ruta1': 'Ruta 30-B', 'ruta2': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'tiempo': '5 min', 'recorrido': 'De Santa Tecla a San Salvador', 'distancia': '2 km' },
            { 'id': '02', 'title': 'Boulevard Venezuela', 'ruta1': 'Ruta 52', 'ruta2': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'tiempo': '20 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '10 km' },
            { 'id': '03', 'title': 'Metrocentro', 'ruta1': 'Ruta 108', 'ruta2': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'tiempo': '1 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '0.5 km' },
            { 'id': '04', 'title': 'La gran vía', 'ruta1': 'Ruta 42-C', 'ruta2': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'tiempo': '3 min', 'recorrido': 'De Santa Tecla al Centro de San Salvador', 'distancia': '1 km' },
            { 'id': '05', 'title': 'Multiplaza', 'ruta1': 'Ruta 46', 'ruta2': 'Ruta 44', 'tarifa': '$0.76 ctvs', 'tiempo': '10 min', 'recorrido': 'De San Juan Opico a San Salvador', 'distancia': '5 km' },
            { 'id': '05', 'title': 'Galerías', 'ruta1': 'Ruta 101-D', 'ruta2': 'Ruta 44', 'tarifa': '$0.76 ctvs', 'tiempo': '10 min', 'recorrido': 'De San Juan Opico a San Salvador', 'distancia': '5 km' },
        ];
    };
    PerfilPage.prototype.getItems = function (ev) {
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
    PerfilPage.prototype.openItem = function (item) {
        this.navCtrl.push('DetalleperfilPage', { item: item });
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\perfil\perfil.html"*/'<!--\n\n  Generated template for the PerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="perfil">\n\n      <ion-title>Crear Ruta</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar placeholder="¿A dónde quieres ir?" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        <h2>{{item.title}}</h2>\n\n        <button ion-button clear item-end (click)="openItem(item)">Ir</button>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=8.js.map