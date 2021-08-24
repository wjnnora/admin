import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { ContentComponent } from './template/content/content.component';
import { ClienteComponent } from './cliente/cliente.component';
import { Cliente_listarComponent } from './cliente/cliente_listar/cliente_listar.component';
import { Cliente_novoComponent } from './cliente/cliente_novo/cliente_novo.component';
import { TituloComponent } from './_shared/titulo/titulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    ClienteComponent,
    Cliente_listarComponent,
    Cliente_novoComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
