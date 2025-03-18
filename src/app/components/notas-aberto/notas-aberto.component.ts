import { Component, inject } from '@angular/core';
import { Nota } from '../../../models/Nota.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContaClienteComponent } from '../conta-cliente/conta-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { NovaContaDialogComponent } from '../nova-conta-dialog/nova-conta-dialog.component';
import { Cliente } from '../../../models/Cliente.model';

@Component({
  selector: 'app-notas-aberto',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ContaClienteComponent,
  ],
  templateUrl: './notas-aberto.component.html',
  styleUrl: './notas-aberto.component.scss',
})
export class NotasAbertoComponent {
  readonly dialog = inject(MatDialog);
  
  notas: Array<Nota> = [];
  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal', 'actions'];

  constructor() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NovaContaDialogComponent, {
      data: { nome: '' }
    });

    dialogRef.afterClosed().subscribe((result: Cliente) => {
      this.onCreateConta(result);
    });
  }

  onFecharConta(nota: Nota) {
    console.log('Nota fechada', nota);
  }

  onDeleteConta(nota: Nota) {
    this.notas.splice(this.notas.indexOf(nota), 1);
  }

  onCreateConta(cliente: Cliente) {
    this.notas.push({
      cliente,
      data: new Date(),
      produtos: [],
      total: 0,
    });
  }
}
