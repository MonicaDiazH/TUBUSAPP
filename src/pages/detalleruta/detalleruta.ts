import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

/**
 * Generated class for the DetallerutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleruta',
  templateUrl: 'detalleruta.html',
})
export class DetallerutaPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , item: Items) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallerutaPage');
  }

}
