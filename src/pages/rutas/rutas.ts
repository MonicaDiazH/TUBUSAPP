import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
  detallerutaPage ="DetallerutaPage";
  searchQuery: string = '';
  items: Array<any>;

   constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'id':'01','title':'Ruta 44', 'tarifa':'$0.25 ctvs', 'tiempo':'5 min','recorrido':'49 Av. Sur','distancia':'2 km'},
      {'id':'02','title':'Ruta 101 B', 'tarifa':'$0.25 ctvs', 'tiempo':'20 min','recorrido':'Santa Tecla al Centro de San Salvador','distancia':'10 km'},
      {'id':'03','title':'Ruta 30 B', 'tarifa':'$0.25 ctvs', 'tiempo':'1 min','recorrido':'De Santa Tecla al Centro de San Salvador','distancia':'0.5 km'},
      {'id':'04','title':'Ruta 101 D', 'tarifa':'$0.25 ctvs', 'tiempo':'3 min','recorrido':'De Santa Tecla al Centro de San Salvador','distancia':'1 km'},
      {'id':'05','title':'Ruta 108', 'tarifa':'$0.76 ctvs', 'tiempo':'10 min','recorrido':'De San Juan Opico a San Salvador','distancia':'5 km'},
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openItem(item) {
    this.navCtrl.push('DetallerutaPage', { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
  }

}
