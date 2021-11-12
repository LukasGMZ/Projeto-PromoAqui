import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { PromocaoService } from '../../services/promocao.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  promocaoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private promocaoService: PromocaoService
  ) { }

  ngOnInit() {
    this.promocaoForm = this.fb.group({
      produto: [''],
      preco: [''],
      link: [''],
      imagem: [''],
      descricao: ['']
    });
  }

  async adicionaPromocao() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.promocaoService.promocaoCadastro(this.promocaoForm.value).then(
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
}
  
