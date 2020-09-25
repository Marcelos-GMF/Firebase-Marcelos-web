import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/pages/login.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosCriadosComponent } from './views/produtos/produtos-criados/produtos-criados.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosCrudComponent },
  { path: 'produtos/criados', component: ProdutosCriadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
