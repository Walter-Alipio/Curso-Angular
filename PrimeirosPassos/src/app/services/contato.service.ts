import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email":"ana@email"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235", "email":"agata@email"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email":"bruno@email"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email":"beatriz@email"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email":"carlos@email"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email":"daniel@email"}
  ]

  constructor() { 
    
    //Salvar contatos no local storage
    this.salvarContosNoLocalStorage();
    
    //Tentar obter os dados do local storage
    this.obtemContatosDoLocalStorage();
  }

  private salvarContosNoLocalStorage() {
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  private obtemContatosDoLocalStorage() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
    this.contatos = contatosLocalStorage || null;
  }

  public obterContos(): Contato[]{
    return this.contatos;
  }

  public salvarContato(contato: Contato){
    this.contatos.push(contato);
    this.salvarContosNoLocalStorage();
  }


}
