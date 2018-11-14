import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, item: Items) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleperfilPage');
  }

}
