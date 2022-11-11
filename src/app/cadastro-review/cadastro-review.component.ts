import { Review, dadosTeste } from './../review';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-review',
  templateUrl: './cadastro-review.component.html',
  styleUrls: ['./cadastro-review.component.css'],
})
export class CadastroReviewComponent implements OnInit {
  review: Review;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.review = new Review('Usuário Logado');
  }

  ngOnInit(): void {
    const parametro = this.route.snapshot.queryParamMap.get('id');
    if (parametro) {
      const id = +parametro;
      const busca = dadosTeste.find((r) => {
        return r.id === id;
      });
      if (busca) {
        this.review = busca;
      }
    }
  }

  cadastrar(): void {
    //cadastra
    this.voltar();
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
