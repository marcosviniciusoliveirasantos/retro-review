import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private readonly tabela: string = 'USUARIO';

  constructor() {
    this.atualizarListaUsuarios();
  }

  salvar(usuario: Usuario): void {
    this.atualizarListaUsuarios();
    this.usuarios.push(usuario);
    localStorage.setItem(this.tabela, JSON.stringify(this.usuarios));
  }

  obterUsuario(email: string, senha: string) {
    this.atualizarListaUsuarios();
    return this.usuarios.find((u) => {
      return u.email == email && u.senha == senha;
    });
  }

  private atualizarListaUsuarios(): void {
    const listaAtualizada: Usuario[] = JSON.parse(
      localStorage.getItem(this.tabela)!
    );
    if (listaAtualizada) {
      this.usuarios = listaAtualizada;
    }
  }
}
