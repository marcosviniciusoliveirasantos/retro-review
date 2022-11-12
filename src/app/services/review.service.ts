import { Injectable } from '@angular/core';
import { Review } from '../review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviews: Review[] = [];
  private readonly tabela: string = 'REVIEWS_CADASTRADAS';

  constructor() {
    this.atualizarListaReviews();
  }

  salvar(review: Review): void {
    this.atualizarListaReviews();
    if (review.id) {
      this.atualizarReview(review);
    } else {
      this.incluirNovaReview(review);
    }
  }

  private incluirNovaReview(review: Review): void {
    review.id = this.gerarId();
    this.reviews.push(review);
    localStorage.setItem(this.tabela, JSON.stringify(this.reviews));
  }

  private gerarId(): number {
    if (this.reviews.length == 0) {
      return 1;
    }
    return Math.max(...this.reviews.map((r) => r.id)) + 1;
  }

  private atualizarReview(review: Review): void {
    this.excluir(review);
    this.reviews.push(review);
    localStorage.setItem(this.tabela, JSON.stringify(this.reviews));
  }

  excluir(review: Review): void {
    this.reviews = this.reviews.filter((r) => r.id != review.id);
    localStorage.setItem(this.tabela, JSON.stringify(this.reviews));
  }

  obterReview(id: number) {
    this.atualizarListaReviews();
    return this.reviews.find((r) => {
      return r.id == id;
    });
  }

  obterListaReview(): Review[] {
    this.atualizarListaReviews();
    return this.reviews;
  }

  private atualizarListaReviews(): void {
    const listaAtualizada: Review[] = JSON.parse(
      localStorage.getItem(this.tabela)!
    );
    if (listaAtualizada) {
      this.reviews = listaAtualizada;
    }
  }
}
