import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ErrosComponent } from './erros/erros.component';
import { MedicosComponent } from './medicos/medicos.component';
import { FilterPipe } from './filter.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from './errors/errors.module';
import { MessageRequiredComponent } from './message-required/message-required.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    ConsultaContatoComponent,
    LoginComponent,
    HomeComponent,
    EditarMedicoComponent,
    RegistrarUsuarioComponent,
    ConsultaUsuarioComponent,
    EditaUsuarioComponent,
    ErrosComponent,
    MedicosComponent,
    FilterPipe,
    MessageRequiredComponent,
    HeaderComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ErrorsModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
