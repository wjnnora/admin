import { ClienteComponent } from './cliente/cliente.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: TemplateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente_listar', component: ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
