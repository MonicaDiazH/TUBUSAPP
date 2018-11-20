webpackJsonp([17],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleperfilPageModule", function() { return DetalleperfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalleperfil__ = __webpack_require__(354);
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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleperfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(227);
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
        this.isRunning = false;
        this.directionService = null;
        this.directionDsiplay = null;
        this.bounds = null;
        this.item = navParams.data.item;
        this.latitud = navParams.get("latitud");
        this.longitud = navParams.get("longitud");
    }
    DetalleperfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleperfilPage');
        this.loadMap();
    };
    DetalleperfilPage.prototype.loadMap = function () {
        var _this = this;
        // This code is necessary for browser
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
            'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
        });
        var option = {
            enableHighAccuracy: true
        };
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* LocationService */].getMyLocation(option).then(function (myLocation) {
            _this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMaps */].create('map_canvas', {
                camera: {
                    target: myLocation.latLng,
                    zoom: 10
                }
            });
            var marker = _this.map.addMarkerSync({
                title: "Tú ubicación",
                position: myLocation.latLng
            });
            var marker1 = _this.map.addMarkerSync({
                title: "Destino",
                position: {
                    lat: _this.latitud,
                    lng: _this.longitud,
                }
            });
            // Move to the position
            _this.map.animateCamera({
                target: {
                    lat: _this.latitud,
                    lng: _this.longitud,
                },
                'zoom': 10
            }).then(function () {
                marker.showInfoWindow();
                marker1.showInfoWindow();
                //this.isRunning = false;
            });
            /*let ubicacion: ILatLng [] = [
              { lat: 13.68935,
                lng: -89.18718 },
              { lat: 13.8333000,
                lng: -88.9167000}
            ];
            this.map.addPolyline({
              points: ubicacion,
              color: '#AA00FF',
              width: 5,
              geodesic: true,
              clickable:true,
            }).then((polyline: Polyline) => {
              polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
                let position: LatLng = <LatLng>params[0] ;
                this.map.addMarker({
                  position: position,
                  title: position.toUrlValue(),
                  disableAutoPan: true
                }).then((marker2: Marker) => {
                  marker2.showInfoWindow();
                });
              });
            });*/
            //this.map = GoogleMaps.create('map_canvas', mapOptions); 
            //marker.showInfoWindow();
            //marker1.showInfoWindow();
        });
    };
    DetalleperfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalleperfil',template:/*ion-inline-start:"C:\git\TUBUSAPP\src\pages\detalleperfil\detalleperfil.html"*/'<!--\n\n  Generated template for the DetalleperfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalles de Ruta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div id="map_canvas"></div>\n\n    <div>\n\n   <ion-card>\n\n    \n\n    <!--<img [src]="\'assets/img/r_\'+item.id+\'.jpg\'">-->\n\n      <ion-fab right top>\n\n        <button ion-fab>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      \n\n      <ion-list inset>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12><h2>{{ item.ruta1}}</h2></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.tiempo }}  </p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa}}</p></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-12><h2>{{ item.ruta2 }}</h2></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><p>{{ item.tiempo }}  </p></ion-col>\n\n                <ion-col col-6><p>Tarifa: {{ item.tarifa}}</p></ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6><p>{{ item.latitud }}  </p></ion-col>\n\n              <ion-col col-6><p>{{ item.longitud}}</p></ion-col>\n\n          </ion-row>\n\n          </ion-grid>    \n\n      </ion-list>\n\n    \n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\git\TUBUSAPP\src\pages\detalleperfil\detalleperfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], DetalleperfilPage);
    return DetalleperfilPage;
}());

//# sourceMappingURL=detalleperfil.js.map

/***/ })

});
//# sourceMappingURL=17.js.map