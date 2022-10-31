import { Review, dadosTeste } from './../review';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-review',
  templateUrl: './tabela-review.component.html',
  styleUrls: ['./tabela-review.component.css'],
})
export class TabelaReviewComponent implements OnInit {
  listaReviews: Review[];

  constructor() {
    this.listaReviews = dadosTeste;
  }

  ngOnInit(): void {}
}
