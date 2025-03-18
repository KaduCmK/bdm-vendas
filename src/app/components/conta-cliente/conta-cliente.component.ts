import { MatInputModule } from '@angular/material/input';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Nota } from '../../../models/Nota.model';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Produto } from '../../../models/Produto.model';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-conta-cliente',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    DatePipe,
    CurrencyPipe,
    ReactiveFormsModule
  ],
  templateUrl: './conta-cliente.component.html',
  styleUrl: './conta-cliente.component.scss',
})
export class ContaClienteComponent {
  @Input() conta!: Nota;

  @Output() fecharConta = new EventEmitter<Nota>();
  @Output() deleteConta = new EventEmitter<Nota>();

  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal', 'actions'];
  @ViewChild(MatTable) table!: MatTable<Produto>;

  form = new FormGroup({
    nome: new FormControl(null, Validators.required),
    preco: new FormControl(null, Validators.required),
  })
  get controls() { return this.form.controls;}

  constructor() {}

  addQuantity(produto: Produto) {
    produto.quantidade++;
    this.conta.total = this.conta.produtos.reduce(
      (acc, prod) => acc + prod.valor * prod.quantidade,
      0
    );
  }

  onAddProduto() {
    const novoProduto: Produto = {
      nome: this.controls.nome.value!,
      quantidade: 1, // Valor inicial de quantidade
      valor: parseFloat(this.controls.preco.value!),
    };

    this.conta.produtos.push(novoProduto);
    this._setTotal();

    this.table.renderRows();
    this.form.reset();
  }

  onDeleteProduto(produto: Produto) {
    const index = this.conta.produtos.indexOf(produto);
    this.conta.produtos.splice(index, 1);

    this._setTotal();

    this.table.renderRows();
  }

  private _setTotal() {
    this.conta.total = this.conta.produtos.reduce(
      (acc, prod) => acc + prod.valor * prod.quantidade,
      0
    );
  }

  onFecharConta() { this.fecharConta.emit(this.conta); }

  onDeleteConta() { this.deleteConta.emit(this.conta); }
}
