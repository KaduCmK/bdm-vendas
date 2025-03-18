import { Component, Input, ViewChild } from '@angular/core';
import { Nota } from '../../../models/Nota.model';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Produto } from '../../../models/Produto.model';
import { MatIconModule } from '@angular/material/icon';
import { ContaClienteComponent } from "../conta-cliente/conta-cliente.component";

@Component({
  selector: 'app-notas-aberto',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ContaClienteComponent
],
  templateUrl: './notas-aberto.component.html',
  styleUrl: './notas-aberto.component.scss',
})
export class NotasAbertoComponent {
  notas: Array<Nota> = [
    {
      cliente: { nome: 'João' },
      data: new Date(),
      produtos: [
        { nome: 'itaipava litrao', quantidade: 2, valor: 7.5 },
        { nome: 'agua 250ml', quantidade: 1, valor: 2.5 },
      ],
      total: 0,
    },
    { cliente: { nome: 'Fulano' }, data: new Date(), produtos: [], total: 100 },
    {
      cliente: { nome: 'Beltrano' },
      data: new Date(),
      produtos: [],
      total: 100,
    },
  ];
  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal', 'actions'];

  constructor() {}

  onFecharConta(nota: Nota) {
    console.log('Nota fechada', nota);
  }

  onDeleteConta(nota: Nota) {
    this.notas.splice(this.notas.indexOf(nota), 1);
  }

  onCreateConta() {
    this.notas.push({
      cliente: { nome: 'Novo Cliente' },
      data: new Date(),
      produtos: [],
      total: 0,
    });
  }
}