import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Instancia do nosso storage
  private _storage: Storage | null = null;

  //Construtor que instancia a variavel storage
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    //Cria o banco de dados de forma async, dentro do navegador/celular
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Cria e expõe os métodos que o usuário desse serviço pode chamar>

  //Método set
    public set(key: string, value: any){
    this._storage?.set(key, value);
  }

  //Método get
    public get(key: string) {
    this._storage?.get(key,);
  }

  //Método remove
  public remove(key: string) {
    this._storage?.remove(key,);
  }

  //Método para pegar todos os dados armazenados no storage
  public getAll(){
  const lista = [];
  this._storage.forEach((value, key, index) => {
  lista.push(value);
  });
  return lista;
}

}
