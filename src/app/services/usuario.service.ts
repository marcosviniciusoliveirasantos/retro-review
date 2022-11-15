import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private readonly tabela: string = 'USUARIOS_CADASTRADOS';

  constructor() {
    this.atualizarListaUsuarios();
  }

  salvar(usuario: Usuario): void {
    this.atualizarListaUsuarios();
    usuario.id = this.gerarId();
    this.usuarios.push(usuario);
    localStorage.setItem(this.tabela, JSON.stringify(this.usuarios));
  }

  private gerarId(): number {
    if (this.usuarios.length == 0) {
      return 1;
    }
    return Math.max(...this.usuarios.map((u) => u.id)) + 1;
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
