import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { ConectoresComponent } from './cliente/conectores/conectores.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { ContentComponent } from './template/content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authenticate/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    ListaClientesComponent,
    NovoClienteComponent,
    ConectoresComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
