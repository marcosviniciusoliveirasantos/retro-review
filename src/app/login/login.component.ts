import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';

  exibirMensagem: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    const usuario = this.loginService.obterUsuarioLogado();
    if (usuario) {
      this.router.navigate(['/']);
    }
  }

  async realizarLogin(): Promise<void> {
    if (await this.loginService.realizarLogin(this.email, this.senha)) {
      this.router.navigate(['/']);
    } else {
      this.exibirMensagem = true;
    }
  }
}
