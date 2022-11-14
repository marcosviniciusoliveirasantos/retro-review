import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroReviewComponent } from './cadastro-review/cadastro-review.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LogadoGuard } from './guard/logado.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'novo', component: CadastroUsuarioComponent },
  {
    path: 'review',
    component: CadastroReviewComponent,
    canActivate: [LogadoGuard],
  },
  { path: '', component: InicioComponent, canActivate: [LogadoGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
