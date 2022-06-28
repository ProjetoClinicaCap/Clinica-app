import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthLogin } from './auth-login.service';
import { AuthAdm } from './auth-adm.service';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicosComponent } from './medicos/medicos.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },

  {
    path: 'cadastrocontato',
    component: CadastroContatoComponent,
    canActivate: [AuthAdm],
  },
  {
    path: 'consultacontato',
    component: ConsultaContatoComponent,
    canActivate: [AuthAdm, AuthLogin],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro/:idcontato',
    component: EditarMedicoComponent,
    canActivate: [AuthAdm, AuthLogin],
  },

  {
    path: 'registraUsuario',
    component: RegistrarUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'consultausuario',
    component: ConsultaUsuarioComponent,
    canActivate: [AuthAdm],
  },
  {
    path: 'usuario/:id',
    component: EditaUsuarioComponent,
  },
  {
    path: 'medicos',
    component: MedicosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
