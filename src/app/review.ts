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

export const dadosTeste: Review[] = [
  {
    id: 1,
    jogo: 'Jogo 1',
    nota: '10',
    analise: 'Review do Jogo 1 pelo Autor 1',
    autor: 'Autor 1',
  },
  {
    id: 2,
    jogo: 'Jogo 2',
    nota: '8',
    analise: 'Review do Jogo 2 pelo Autor 2',
    autor: 'Autor 2',
  },
  {
    id: 3,
    jogo: 'Jogo 3',
    nota: '9',
    analise: 'Review do Jogo 3 pelo Autor 3',
    autor: 'Autor 3',
  },
];
