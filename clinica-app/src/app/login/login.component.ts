import { AuthenticationService } from './../authentication.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DecodeTokenService } from '../decode-token.service';
import { UsuarioService } from '../usuario.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginForm!: FormGroup;
@ViewChild('userNameInput') userNameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private auth: AuthenticationService,
    private decodeToken: DecodeTokenService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          senha: ['', Validators.required]

        });

    }

  login(){
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;
    this.auth.authenticate(email, senha)
        .subscribe(
              () => this.router.navigateByUrl('loginpage'),
            err => {
          console.log(err);
          this.loginForm.reset();
          this.userNameInput?.nativeElement.focus();

          alert('Email ou senha incorretos');
        });
      }
    }

