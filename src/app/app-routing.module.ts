import { AuthGuard } from './authenticate/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authenticate/login/login.component';
import { ConectoresComponent } from './cliente/conectores/conectores.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'clientes', component: ListaClientesComponent },
      { path: 'clientes/novo', component: NovoClienteComponent },
      { path: 'clientes/conectores', component: ConectoresComponent },
      { path: '404', component: PageNotFoundComponent}
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
