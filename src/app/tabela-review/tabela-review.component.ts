import { Review, dadosTeste } from './../review';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-review',
  templateUrl: './tabela-review.component.html',
  styleUrls: ['./tabela-review.component.css'],
})
export class TabelaReviewComponent implements OnInit {
  listaReviews: Review[];

  constructor(private router: Router) {
    this.listaReviews = dadosTeste;
  }

  ngOnInit(): void {}

  acessarReview(id: number): void {
    this.router.navigate(['/review'], { queryParams: { id: id } });
  }
}
