import { MatInputModule } from '@angular/material/input';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Nota } from '../../../models/Nota.model';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Produto } from '../../../models/Produto.model';
import { FormsModule, NgForm } from '@angular/forms';
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
    FormsModule
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

  constructor() {}

  addQuantity(nota: Nota, produto: Produto) {
    produto.quantidade++;
    nota.total = nota.produtos.reduce(
      (acc, prod) => acc + prod.valor * prod.quantidade,
      0
    );
  }

  onAddProduto(nota: Nota, nome: string, preco: string, form: NgForm) {
    if (!nome || !preco) {
      // Aqui você pode implementar uma mensagem de validação, se necessário.
      return;
    }

    const novoProduto: Produto = {
      nome: nome,
      quantidade: 1, // Valor inicial de quantidade
      valor: parseFloat(preco),
    };

    nota.produtos.push(novoProduto);

    // Atualiza o total da nota com base nos produtos
    nota.total = nota.produtos.reduce(
      (acc, prod) => acc + prod.valor * prod.quantidade,
      0
    );

    this.table.renderRows();
    form.resetForm();
  }

  onFecharConta() {
    this.fecharConta.emit(this.conta);
  }

  onDeleteConta() {
    this.deleteConta.emit(this.conta);
  }
}
