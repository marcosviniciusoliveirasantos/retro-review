import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly tabela: string = 'USUARIO_LOGADO';
  private emissor = new Subject<boolean>();

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
      this.emissor.next(true);
      return true;
    }

    localStorage.setItem(this.tabela, '');
    this.emissor.next(false);
    return false;
  }

  public realizarLogout() {
    this.emissor.next(false);
    localStorage.setItem(this.tabela, '');
  }

  public getEmissor(): Observable<boolean> {
    return this.emissor;
  }
}
