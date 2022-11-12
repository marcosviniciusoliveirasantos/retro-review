import { Review, dadosTeste } from './../review';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-cadastro-review',
  templateUrl: './cadastro-review.component.html',
  styleUrls: ['./cadastro-review.component.css'],
})
export class CadastroReviewComponent implements OnInit {
  review: Review;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.review = new Review('Usuário Logado');
  }

  ngOnInit(): void {
    const parametro = this.route.snapshot.queryParamMap.get('id');
    if (parametro) {
      const id = +parametro;
      const busca = this.reviewService.obterReview(id);
      if (busca) {
        this.review = busca;
      }
    }
  }

  salvar(): void {
    this.reviewService.salvar(this.review);
    this.voltar();
  }

  excluir(): void {
    this.reviewService.excluir(this.review);
    this.voltar();
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
