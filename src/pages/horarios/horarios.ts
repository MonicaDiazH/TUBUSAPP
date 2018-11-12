import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {

  searchQuery: string = '';
  items: Array<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'id':'01','title':'Ruta 44', 'tarifa':'$0.25 ctvs', 'horario':'De 8:00 a.m. a 10:00 p.m.','recorrido':'De Santa Tecla a San Salvador'},
      {'id':'02','title':'Ruta 101 B', 'tarifa':'$0.25 ctvs', 'horario':'De 8:00 a.m. a 10:00 p.m.','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'03','title':'Ruta 30 B', 'tarifa':'$0.25 ctvs', 'horario':'De 8:00 a.m. a 10:00 p.m.','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'04','title':'Ruta 101 D', 'tarifa':'$0.25 ctvs', 'horario':'De 8:00 a.m. a 10:00 p.m.','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'05','title':'Ruta 108', 'tarifa':'$0.76 ctvs', 'horario':'De 5:00 a.m. a 10:00 p.m.','recorrido':'De San Juan Opico a San Salvador'},
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
    this.navCtrl.push('DetallehorarioPage', { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }

}
