import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemReorderGesture } from 'ionic-angular/umd/components/item/item-reorder-gesture';
import { Items } from '../../providers';

/**
 * Generated class for the DetallehorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallehorario',
  templateUrl: 'detallehorario.html',
})
export class DetallehorarioPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , item: Items) {
    //this.item = navParams.get('item') || item.defaultItem;
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallehorarioPage');
  }

}
