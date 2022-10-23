import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  usuarioLogado: boolean;

  constructor() {
    this.usuarioLogado = true;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  sair(): void {
    this.usuarioLogado = false;
  }

  acessarTemporario(): void {
    this.usuarioLogado = true;
  }
}
