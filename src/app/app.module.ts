import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pagina/header/header.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { InicialComponent } from './pagina/inicial/inicial.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { SelectComponent } from './pagina/select/select.component';
import { JogosComponent } from './pagina/jogos/jogos.component';
import { ConsolesComponent } from './pagina/consoles/consoles.component';
import { CarrinhoComponent } from './pagina/carrinho/carrinho.component';
import { LoginComponent } from './pagina/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InicialComponent,
    ContatoComponent,
    FooterComponent,
    SelectComponent,
    JogosComponent,
    ConsolesComponent,
    CarrinhoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
