import { Component } from '@angular/core';
import { NotasAbertoComponent } from '../notas-aberto/notas-aberto.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NavOption } from '../../../models/NavOption.model';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';
import { PainelClientesComponent } from '../painel-clientes/painel-clientes.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    NotasAbertoComponent,
    PainelClientesComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent {
  navOptions: NavOption[] = [
    { label: 'Contas em Aberto', icon: 'receipt_long', value: 'contasAberto' },
    { label: 'Contas Arquivadas', icon: 'history', value: 'contasArquivado' },
    { label: 'Cadastro de Clientes', icon: 'people', value: 'clientes' },
  ];
  selectedOption!: string;

  constructor() {}

  onSelectOption(option: NavOption, idx: number): void {
    this.selectedOption = option.value;
  }

  onAddConta() {}
}