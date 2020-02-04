import { Usuario } from './Usuario.interface';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'mateus' &&
       usuario.senha === '12345'){
        this.usuarioAutenticado = true;
        this.router.navigate(['/']);
        this.mostrarMenuEmitter.emit(true);
       }
       else{
         this.usuarioAutenticado = false;
       }
  }
}
