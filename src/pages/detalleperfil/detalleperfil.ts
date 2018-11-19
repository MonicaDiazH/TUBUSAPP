import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import {
  LocationService,
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Environment,
  Marker,
  MyLocation,
  GoogleMapsEvent,
  MyLocationOptions,
  LatLng,
  Polyline,
  ILatLng,
  GoogleMapsAnimation,
} from '@ionic-native/google-maps';

/**
 * Generated class for the DetalleperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleperfil',
  templateUrl: 'detalleperfil.html',
})
export class DetalleperfilPage {
  item: any;
  map: GoogleMap;
  isRunning: boolean = false;
  directionService: any = null;
  directionDsiplay: any = null;
  bounds: any = null;
  myLatLng: any;
  waypoints: any[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, item: Items) {
    this.item = navParams.data.item;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleperfilPage');
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });

    let option: MyLocationOptions = {
      enableHighAccuracy: true
    };

   
    LocationService.getMyLocation(option).then((myLocation: MyLocation) => { 
      this.map = GoogleMaps.create('map_canvas', {
         camera: { 
         target: myLocation.latLng,
         zoom : 8
      }   
    });
   
    let marker: Marker = this.map.addMarkerSync({
      title: "Tú ubicación",
      position: myLocation.latLng
      
    });

    let marker1: Marker = this.map.addMarkerSync({
      title: "Destino",
      position: {
        lat: 13.8333000,
        lng: -88.9167000
      }
      
    });

    // Move to the position
    this.map.animateCamera({
      target: {
        lat: 13.8333000,
        lng: -88.9167000
      },
      'zoom': 8
    }).then(() => {
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
  
  }

}
