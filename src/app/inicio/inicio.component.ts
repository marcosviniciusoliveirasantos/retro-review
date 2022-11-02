import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  valorBusca: string = '';
  numeroResultados!: number;

  constructor() {}

  ngOnInit(): void {}

  buscar(valorBusca: string): void {
    this.valorBusca = valorBusca;
  }

  atualizarNumeroResultados(numeroResultados: number) {
    setTimeout(() => {
      this.numeroResultados = numeroResultados;
    }, 100);
  }
}
