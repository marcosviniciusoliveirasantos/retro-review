import { LoginService } from './../services/login.service';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario;

  confirmarSenhaAux: string = '';

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const usuario = this.loginService.obterUsuarioLogado();
    if (usuario) {
      this.router.navigate(['/']);
    }
  }

  cadastrar(): void {
    this.usuarioService.salvar(this.usuario);
    this.router.navigate(['/login']);
  }
}
