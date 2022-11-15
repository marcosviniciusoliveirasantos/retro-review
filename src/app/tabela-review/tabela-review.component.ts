import { Review } from './../review';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-tabela-review',
  templateUrl: './tabela-review.component.html',
  styleUrls: ['./tabela-review.component.css'],
})
export class TabelaReviewComponent implements OnInit, OnChanges {
  @Input() valorBusca: string = '';
  @Output() resultadosObtidos = new EventEmitter<number>();
  listaReviews: Review[];

  constructor(private router: Router, private reviewService: ReviewService) {
    this.listaReviews = reviewService.obterListaReview();
    this.enviarNumeroResultados();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listaReviews = this.reviewService
      .obterListaReview()
      .filter((r) =>
        r.jogo.toLocaleLowerCase().includes(this.valorBusca.toLocaleLowerCase())
      );
    this.enviarNumeroResultados();
  }

  enviarNumeroResultados(): void {
    this.resultadosObtidos.emit(this.listaReviews.length);
  }

  ngOnInit(): void {}

  acessarReview(id: number): void {
    this.router.navigate(['/review'], { queryParams: { id: id } });
  }
}
