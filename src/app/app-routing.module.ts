import { ConectoresComponent } from './cliente/conectores/conectores.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: TemplateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component:  ListaClientesComponent},
  { path: 'clientes/novo', component: NovoClienteComponent },
  { path: 'clientes/conectores', component: ConectoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
