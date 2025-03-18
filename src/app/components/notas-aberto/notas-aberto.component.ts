import { Component, inject, OnInit } from '@angular/core';
import { Conta } from '../../../models/Conta.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContaClienteComponent } from '../conta-cliente/conta-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { NovaContaDialogComponent } from '../nova-conta-dialog/nova-conta-dialog.component';
import { Cliente } from '../../../models/Cliente.model';
import { FirestoreService } from '../../../services/firestore.service';

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
export class NotasAbertoComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  readonly firestore = inject(FirestoreService);
  contas: Array<Conta> = [];

  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal', 'actions'];

  ngOnInit(): void {
    this.firestore.getContas().subscribe(contas => {
      this.contas = contas;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NovaContaDialogComponent, {
      data: { nome: '' }
    });

    dialogRef.afterClosed().subscribe((result: Cliente) => {
      this.onCreateConta(result);
    });
  }

  onFecharConta(nota: Conta) {
    console.log('Nota fechada', nota);
  }

  onDeleteConta(conta: Conta) {
    this.firestore.deleteConta(conta);
  }

  onCreateConta(cliente: Cliente) {
    this.firestore.addConta(cliente)
  }
}
