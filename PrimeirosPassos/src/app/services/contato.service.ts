import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { 
    
  }

  public obterContos() : Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  public salvarContato(contato: Contato){
    return this.http.post<Contato>(this.API, contato);
  }

  public buscarPorId(id: number) : Observable<Contato> {
    const url = `${this.API}/${id}`; 
    return this.http.get<Contato>(url);
  }

  public excluirContato(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`; 
    return this.http.delete<Contato>(url);
  }

  public editarContato(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`; 
    return this.http.put<Contato>(url,contato);
  }

  public editarOuSalvarContato(contato: Contato) : Observable<Contato>{
    if(contato.id){
      return this.editarContato(contato);
    } 
    return this.salvarContato(contato);
  }
}
