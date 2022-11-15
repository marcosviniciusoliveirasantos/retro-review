import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private readonly url: string = 'http://localhost:3000/reviews';
  private readonly options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  salvar(review: Review): Observable<Review> {
    if (review.id) {
      return this.atualizarReview(review);
    }

    return this.incluirNovaReview(review);
  }

  private incluirNovaReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.url, review, this.options);
  }

  private atualizarReview(review: Review): Observable<Review> {
    return this.httpClient.put<Review>(
      `${this.url}/${review.id}`,
      review,
      this.options
    );
  }

  excluir(id: number): Observable<Review> {
    return this.httpClient.delete<Review>(`${this.url}/${id}`);
  }

  obterReview(id: number): Observable<Review> {
    return this.httpClient.get<Review>(`${this.url}/${id}`);
  }

  obterListaReview(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.url);
  }
}
