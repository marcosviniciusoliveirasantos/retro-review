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

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {}

  cadastrar(): void {
    //logica para cadastro
    this.router.navigate(['/login']);
  }
}
