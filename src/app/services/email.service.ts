import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailValue = new BehaviorSubject({});
  emailCollection: AngularFirestoreCollection;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.emailCollection = this.afs.collection('emails');
  }

  async emailCadastro({ email }): Promise<any> {
    this.afs.collection('emails').add({ email: email })
  }
}
