webpackJsonp([2],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsPageModule = /** @class */ (function () {
    function TicketsPageModule() {
    }
    TicketsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */]),
            ],
        })
    ], TicketsPageModule);
    return TicketsPageModule;
}());

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
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
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketsPage = /** @class */ (function () {
    function TicketsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.seleccion = "pagar";
        this.searchQuery = '';
        this.initializeItems();
    }
    TicketsPage.prototype.initializeItems = function () {
        this.items = [
            { 'id': '01', 'title': 'Ruta 44', 'title1': 'Ruta 30 B', 'tarifa': '$0.25 ctvs', 'fecha': '13 nov. 2018', 'recorrido': 'De Santa Tecla a San Salvador' },
            { 'id': '02', 'title': 'Ruta 101 B', 'title1': 'Ruta 44', 'tarifa': '$0.25 ctvs', 'fecha': '09 nov. 2018', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '03', 'title': 'Ruta 30 B', 'title1': 'Ruta 101 D', 'tarifa': '$0.25 ctvs', 'fecha': '06 nov. 2018', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '04', 'title': 'Ruta 101 D', 'title1': 'Ruta 30 B', 'tarifa': '$0.25 ctvs', 'fecha': '01 nov. 2018', 'recorrido': 'De Santa Tecla al Centro de San Salvador' },
            { 'id': '05', 'title': 'Ruta 108', 'title1': 'Ruta 108', 'tarifa': '$0.76 ctvs', 'fecha': '29 oct. 2018', 'recorrido': 'De San Juan Opico a San Salvador' },
        ];
    };
    TicketsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.fecha.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    TicketsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketsPage');
    };
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickets',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\tickets\tickets.html"*/'<!--\n\n  Generated template for the TicketsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tickets">\n\n    <ion-title>Tickets</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-segment [(ngModel)]="seleccion">\n\n    <ion-segment-button value="pagar">Pagar</ion-segment-button>\n\n    <ion-segment-button value="consumo">Consumo</ion-segment-button>\n\n    <ion-segment-button value="saldo">Saldo</ion-segment-button>\n\n    </ion-segment>\n\n    <br>\n\n    <div *ngIf="seleccion == \'pagar\'">\n\n        <ion-card>\n\n            <img src="assets/img/pagar.png"/>\n\n            <ion-card-content>\n\n              <p>\n\n                Acerca tu código al dispositivo infrarojo del transporte público.\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n    </div>\n\n    <div *ngIf="seleccion == \'consumo\'">\n\n      <ion-searchbar placeholder="Buscar" (ionInput)="getItems($event)"></ion-searchbar>\n\n      <ion-list inset>\n\n        <button ion-item *ngFor="let item of items">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12><h2>{{ item.fecha }}</h2></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.title }}  </p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa }}</p></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.title1 }}</p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa }}</p></ion-col>\n\n            </ion-row>\n\n          </ion-grid>    \n\n        </button> \n\n      </ion-list>\n\n    </div>\n\n    <div *ngIf="seleccion == \'saldo\'">\n\n        <ion-item>\n\n            <ion-icon name="cash" item-start large></ion-icon>\n\n            <h2>Saldo disponible</h2>\n\n            <p>$13.50</p>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-icon name="pie" item-start large ></ion-icon>\n\n            <h2>Consumido</h2>\n\n            <p>$ 6.50</p>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <button ion-button icon-start clear item-end>\n\n              <ion-icon name="swap"></ion-icon>\n\n              Comprar Saldo\n\n            </button>\n\n          </ion-item>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\tickets\tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ })

});
//# sourceMappingURL=2.js.map