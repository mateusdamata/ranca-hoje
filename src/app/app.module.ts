import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { FormJogadorComponent } from './compartilhado/form-jogador/form-jogador.component';
import { RancasComponent } from './rancas/rancas.component';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JogadoresComponent,
    FormJogadorComponent,
    RancasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
