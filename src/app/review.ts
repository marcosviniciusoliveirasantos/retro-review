export class Review {
  id: number;
  jogo: string;
  nota: string;
  analise: string;
  autor: string;

  constructor(autor: string) {
    this.id = 0;
    this.jogo = '';
    this.nota = '';
    this.analise = '';
    this.autor = autor;
  }
}
