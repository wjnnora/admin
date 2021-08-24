import { DashboardComponent } from './dashboard/dashboard.component';
import { Cliente_novoComponent } from './cliente/cliente_novo/cliente_novo.component';
import { LoginComponent } from './login/login.component';
import { Cliente_listarComponent } from './cliente/cliente_listar/cliente_listar.component';
import { ClienteComponent } from './cliente/cliente.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },  
  {
    path: 'cliente', component: ClienteComponent, children: [
      { path: 'listar', component: Cliente_listarComponent },
      { path: 'novo', component: Cliente_novoComponent },
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
