import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
})
export class RodapeComponent implements OnInit {
  autoria: String;
  copyright: String;

  constructor() {
    this.autoria = 'Desenvolvido por Marcos Vinicius Santos';
    this.copyright = `@ ${new Date().getFullYear()} Copyright - RetroReview`;
  }

  ngOnInit(): void {}
}
