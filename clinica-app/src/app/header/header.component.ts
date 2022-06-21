import { Usuario2Service } from './../usuario2.service';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<Usuario>;

    constructor(
        private Usuario2Service: Usuario2Service,
        private router:Router) {

        this.user$ = Usuario2Service.getUser();
    }

    logout() {
        this.Usuario2Service.logout();
        this.router.navigate(['login']);
    }
}
