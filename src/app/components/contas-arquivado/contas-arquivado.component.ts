import { Component } from '@angular/core';
import { Conta } from '../../../models/Conta.model';
import { ContaClienteComponent } from '../conta-cliente/conta-cliente.component';

@Component({
  selector: 'app-contas-arquivado',
  imports: [ContaClienteComponent],
  templateUrl: './contas-arquivado.component.html',
  styleUrl: './contas-arquivado.component.scss'
})
export class ContasArquivadoComponent {
  contas: Array<Conta> = [];
  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal', 'actions'];

  constructor() {}
}
