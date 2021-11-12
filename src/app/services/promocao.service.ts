import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  promocaoCollection: AngularFirestoreCollection;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.promocaoCollection = this.afs.collection('promocoes');
  }

  async promocaoCadastro({ produto, preco, link, imagem, descricao }): Promise<any> {
    this.afs.collection('promocoes').add({ 
      produto: produto, 
      preco: preco, 
      link: link, 
      imagem: imagem, 
      descricao: descricao, 
    })
  }

  getPromocoes() {
    return this.promocaoCollection.valueChanges({ idField: 'id' });
  }
}
