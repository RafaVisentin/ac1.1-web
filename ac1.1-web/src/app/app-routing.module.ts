import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ProdutoComponent } from './Produto/produto.component';
import { ProdutoDetalheComponent } from './ProdutoDetalhe/produto-detalhe.component';
import { SobreComponent } from './Sobre/sobre.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }