import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tituloHome:string = "PromoAqui";
  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: '                          Promoção já encerrou!! :(',
      duration: 3000,
      color: 'danger',
      position: 'middle'
      //popup rodape
    });
    toast.present();
  }

}

