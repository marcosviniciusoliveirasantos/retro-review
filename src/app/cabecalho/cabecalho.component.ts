import { LoginService } from './../services/login.service';
import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  usuarioLogado: boolean;
  inscricao: Subscription;

  constructor(private router: Router, private loginService: LoginService) {
    this.inscricao = loginService
      .getEmissor()
      .subscribe((valor) => (this.usuarioLogado = valor));
    this.usuarioLogado = loginService.obterUsuarioLogado() != undefined;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  abrirInicio(): void {
    if (this.usuarioLogado) {
      this.router.navigate(['/']);
    }
  }

  sair() {
    this.loginService.realizarLogout();
    this.router.navigate(['/login']);
  }
}
