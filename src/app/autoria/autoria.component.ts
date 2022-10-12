import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoria',
  templateUrl: './autoria.component.html',
  styleUrls: ['./autoria.component.css']
})
export class AutoriaComponent implements OnInit {

  info_autoria = 'Software desenvolvido por Marcos Vinicius de Oliveira Santos';

  constructor() { }

  ngOnInit(): void {
  }

}
