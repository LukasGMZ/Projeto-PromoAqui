import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  tituloPerfil:string = "Perfil";
  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'email vinculado com sucesso.',
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
