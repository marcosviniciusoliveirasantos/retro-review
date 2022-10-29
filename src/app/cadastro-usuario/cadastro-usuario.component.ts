import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    //logica para cadastro
    this.router.navigate(['/login']);
  }
}
