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
  MyLocationOptions
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
         zoom : 16
      }   
    });
   
    let text = ["Current your location:\n",
    "latitude:" + myLocation.latLng.lat.toFixed(3),
    "longitude:" + myLocation.latLng.lng.toFixed(3)].join("\n");

    let marker: Marker = this.map.addMarkerSync({
      title: text,
      position: myLocation.latLng
      
    });

    //this.map = GoogleMaps.create('map_canvas', mapOptions); 
    marker.showInfoWindow();
  });
  
  }

}
