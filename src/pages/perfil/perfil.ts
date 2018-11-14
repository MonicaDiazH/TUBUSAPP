import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  detallerutaPage ="DetallerutaPage";
  searchQuery: string = '';
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'id':'01','title':'Alameda Juan Pablo', 'ruta1':'Ruta 30-B', 'ruta2':'Ruta 44','tarifa':'$0.25 ctvs', 'tiempo':'5 min','recorrido':'De Santa Tecla a San Salvador','distancia':'2 km'},
      {'id':'02','title':'Boulevard Venezuela', 'ruta1':'Ruta 52','ruta2':'Ruta 44','tarifa':'$0.25 ctvs', 'tiempo':'20 min','recorrido':'De Santa Tecla al Centro de San Salvador','distancia':'10 km'},
      {'id':'03','title':'Metrocentro', 'ruta1':'Ruta 108','ruta2':'Ruta 44','tarifa':'$0.25 ctvs', 'tiempo':'1 min','recorrido':'De Santa Tecla al Centro de San Salvador','distancia':'0.5 km'},
      {'id':'04','title':'La gran vía', 'ruta1':'Ruta 42-C','ruta2':'Ruta 44','tarifa':'$0.25 ctvs', 'tiempo':'3 min','recorrido':'De Santa Tecla al Centro de San Salvador','distancia':'1 km'},
      {'id':'05','title':'Multiplaza', 'ruta1':'Ruta 46','ruta2':'Ruta 44','tarifa':'$0.76 ctvs', 'tiempo':'10 min','recorrido':'De San Juan Opico a San Salvador','distancia':'5 km'},
      {'id':'05','title':'Galerías', 'ruta1':'Ruta 101-D','ruta2':'Ruta 44', 'tarifa':'$0.76 ctvs', 'tiempo':'10 min','recorrido':'De San Juan Opico a San Salvador','distancia':'5 km'},
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
    this.navCtrl.push('DetalleperfilPage', { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
