import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallehorarioPage } from './detallehorario';

@NgModule({
  declarations: [
    DetallehorarioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallehorarioPage),
  ],
  exports: [
    DetallehorarioPage
  ]
})
export class DetallehorarioPageModule {}
