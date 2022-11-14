import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly tabela: string = 'USUARIO_LOGADO';

  constructor(private usuarioService: UsuarioService) {}

  public obterUsuarioLogado() {
    const logado = localStorage.getItem(this.tabela)!;
    if (logado != '' && logado != 'undefined') {
      return logado;
    }
    return undefined;
  }

  public realizarLogin(email: string, senha: string): boolean {
    const usuario = this.usuarioService.obterUsuario(email, senha);
    if (usuario) {
      localStorage.setItem(this.tabela, usuario.nome);
      return true;
    }

    localStorage.setItem(this.tabela, '');
    return false;
  }

  public realizarLogout() {
    localStorage.setItem(this.tabela, '');
  }
}
