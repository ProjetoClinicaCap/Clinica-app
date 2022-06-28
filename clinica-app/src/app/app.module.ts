import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginpageComponent } from './loginpage/loginpage.component';

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
    LoginpageComponent,
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
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
