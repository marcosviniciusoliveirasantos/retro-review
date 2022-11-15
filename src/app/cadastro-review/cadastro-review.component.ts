import { LoginService } from './../services/login.service';
import { Review } from './../review';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-cadastro-review',
  templateUrl: './cadastro-review.component.html',
  styleUrls: ['./cadastro-review.component.css'],
})
export class CadastroReviewComponent implements OnInit {
  review!: Review;
  podeAlterar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private loginService: LoginService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    const usuarioLogado = this.loginService.obterUsuarioLogado();
    this.carregarReview(usuarioLogado!);
    this.podeAlterar = this.review.autor == usuarioLogado;
  }

  private carregarReview(autor: string) {
    const parametro = this.route.snapshot.queryParamMap.get('id');
    if (parametro) {
      const id = +parametro;
      const busca = this.reviewService.obterReview(id);
      if (busca) {
        this.review = busca;
      } else {
        this.criarNovaReview(autor);
      }
    } else {
      this.criarNovaReview(autor);
    }
  }

  private criarNovaReview(autor: string): void {
    this.review = new Review(autor);
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
