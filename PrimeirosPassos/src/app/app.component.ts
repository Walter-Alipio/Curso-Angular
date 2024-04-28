import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        FormularioContatoComponent,
        ListaContatosComponent,
        RouterOutlet
    ]
})
export class AppComponent {
  
}
