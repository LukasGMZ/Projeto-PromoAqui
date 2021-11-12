import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PromocaoService } from '../services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  promocoes: Observable<any[]>;
  @ViewChild('myfab', { read: ElementRef }) carBtn: ElementRef;

  constructor(private promocaoService: PromocaoService) {}

  ngOnInit() {
    this.promocoes = this.promocaoService.getPromocoes();
  }

}
