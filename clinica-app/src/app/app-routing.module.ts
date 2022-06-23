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
import { ErrosComponent } from './erros/erros.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'cadastrocontato',
    component: CadastroContatoComponent,
    canActivate: [AuthAdm]





  },
  {
    path: 'consultacontato',
    component: ConsultaContatoComponent,
    canActivate: [AuthAdm]


  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'cadastro/:idcontato',
    component: EditarMedicoComponent

  },

  {
    path: 'registraUsuario',
    component: RegistrarUsuarioComponent,

  },
  {
    path: 'consultausuario',
    component: ConsultaUsuarioComponent,
    canActivate: [AuthAdm]
  },
  {
    path:'usuario/:email',
    component: EditaUsuarioComponent,
  },
  {
    path:'medicos',
    component: MedicosComponent,

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
