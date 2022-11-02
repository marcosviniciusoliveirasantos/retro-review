import { Usuario } from './../usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';

  exibirMensagem: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  realizarLogin(): void {
    const usuario = this.usuarioService.obterUsuario(this.email, this.senha);
    if (usuario) {
      this.router.navigate(['/']);
    } else {
      this.exibirMensagem = true;
    }
  }
}
