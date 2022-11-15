import { LoginService } from './../services/login.service';
import { Review } from './../review';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastro-review',
  templateUrl: './cadastro-review.component.html',
  styleUrls: ['./cadastro-review.component.css'],
})
export class CadastroReviewComponent implements OnInit {
  review: Review = new Review(' - ');
  podeAlterar: boolean = false;
  usuarioLogado!: string;

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
    this.usuarioLogado = this.loginService.obterUsuarioLogado()!;
    this.carregarReview(this.usuarioLogado);
  }

  private carregarReview(autor: string) {
    const parametro = this.route.snapshot.queryParamMap.get('id');
    if (parametro) {
      const id = +parametro;
      this.reviewService
        .obterReview(id)
        .subscribe(
          (review) => {
            this.review = review;
          },
          (erro) => {
            console.log(erro);
            this.criarNovaReview(autor);
          }
        )
        .add(() => {
          this.podeAlterar = this.review.autor == this.usuarioLogado;
        });
    } else {
      this.criarNovaReview(autor);
      this.podeAlterar = this.review.autor == this.usuarioLogado;
    }
  }

  private criarNovaReview(autor: string): void {
    this.review = new Review(autor);
  }

  salvar(): void {
    this.reviewService
      .salvar(this.review)
      .subscribe()
      .add(() => this.voltar());
  }

  excluir(): void {
    this.reviewService
      .excluir(this.review.id)
      .subscribe()
      .add(() => this.voltar());
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
