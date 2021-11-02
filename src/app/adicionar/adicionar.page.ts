import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Promoção enviada para analise.',
      duration: 3000,
      color: 'danger',
      position: 'bottom'
      //popup rodape
    });
    toast.present();
  }
  
  ngOnInit() {
  }

}
