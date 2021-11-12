import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async cadastraEmail() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.emailService.emailCadastro(this.emailForm.value).then(
        (user) => {
          loading.dismiss();
        },
        async (err) => {
          loading.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Falha no cadastro',
            message: err.message,
            buttons: ['OK'],
          });
 
          await alert.present();
        }
      );
  }

  get emailGet() {
    return this.emailForm.get('email');
  }

}
