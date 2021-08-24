import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente_listar',
  templateUrl: './cliente_listar.component.html',
  styleUrls: ['./cliente_listar.component.css']
})
export class Cliente_listarComponent implements OnInit {

  titulo = 'Cliente Listar';

  constructor() { } 

  ngOnInit() {
  }

}
