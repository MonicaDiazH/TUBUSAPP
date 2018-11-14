import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  items: Array<any>;
  seleccion: string ="pagar";
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'id':'01','title':'Ruta 44','title1':'Ruta 30 B','tarifa':'$0.25 ctvs', 'fecha':'13 nov. 2018','recorrido':'De Santa Tecla a San Salvador'},
      {'id':'02','title':'Ruta 101 B', 'title1':'Ruta 44','tarifa':'$0.25 ctvs', 'fecha':'09 nov. 2018','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'03','title':'Ruta 30 B','title1':'Ruta 101 D', 'tarifa':'$0.25 ctvs', 'fecha':'06 nov. 2018','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'04','title':'Ruta 101 D', 'title1':'Ruta 30 B','tarifa':'$0.25 ctvs', 'fecha':'01 nov. 2018','recorrido':'De Santa Tecla al Centro de San Salvador'},
      {'id':'05','title':'Ruta 108', 'title1':'Ruta 108','tarifa':'$0.76 ctvs', 'fecha':'29 oct. 2018','recorrido':'De San Juan Opico a San Salvador'},
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
        return (item.fecha.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

}
