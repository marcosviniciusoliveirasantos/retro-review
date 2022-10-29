import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  usuarioLogado: boolean;

  constructor(private router: Router) {
    this.usuarioLogado = true;
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
}
