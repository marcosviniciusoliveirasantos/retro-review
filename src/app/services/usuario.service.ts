import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly url: string = 'http://localhost:3000/users';
  private readonly options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  salvar(usuario: Usuario) {
    return this.httpClient
      .post<Usuario>(this.url, JSON.stringify(usuario), this.options)
      .toPromise() as Promise<Usuario>;
  }

  obterUsuario(email: string, senha: string): Promise<Usuario | undefined> {
    return this.getListaUsuarios().then<Usuario | undefined>(
      (resultado: Usuario[]) => {
        return resultado.find((u) => {
          return u.email == email && u.senha == senha;
        });
      }
    );
  }

  private getListaUsuarios(): Promise<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url).toPromise() as Promise<
      Usuario[]
    >;
  }
}
