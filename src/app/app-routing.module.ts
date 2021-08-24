import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import { Cliente_listarComponent } from './cliente/cliente_listar/cliente_listar.component';
import { ClienteComponent } from './cliente/cliente.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: TemplateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cliente', component: ClienteComponent, children: [
      { path: 'listar', component: Cliente_listarComponent },
    ] 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
