import { CarrinhoComponent } from './pagina/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from './pagina/consoles/consoles.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { InicialComponent } from './pagina/inicial/inicial.component';
import { JogosComponent } from './pagina/jogos/jogos.component';
import { LoginComponent } from './pagina/login/login.component';

const routes: Routes = [
  { path:'', component: InicialComponent, pathMatch:'full' },
  { path: 'inicial', component: InicialComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'Jogos', component: JogosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Consoles', component: ConsolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
