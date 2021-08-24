import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente_novo',
  templateUrl: './cliente_novo.component.html',
  styleUrls: ['./cliente_novo.component.css']
})
export class Cliente_novoComponent implements OnInit {

  titulo = 'Cliente Novo';
  
  constructor() { }

  ngOnInit() {
  }

}
