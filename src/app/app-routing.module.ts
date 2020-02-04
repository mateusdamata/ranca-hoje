import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogadoresComponent } from './jogadores/jogadores.component';
import { RancasComponent } from './rancas/rancas.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: "", component: JogadoresComponent},
  {path: "rancas", component: RancasComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
