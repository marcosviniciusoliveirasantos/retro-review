import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  data_acesso: String;

  constructor() {
    this.data_acesso = new Date().toLocaleString();
  }

  ngOnInit(): void {
  }

}
