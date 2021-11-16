import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pagina/contato/contato.component';
import { InicialComponent } from './pagina/inicial/inicial.component';
import { JogosComponent } from './pagina/jogos/jogos.component';

const routes: Routes = [
  { path:'', component: InicialComponent, pathMatch:'full' },
  { path: 'inicial', component: InicialComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'Jogos', component: JogosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
