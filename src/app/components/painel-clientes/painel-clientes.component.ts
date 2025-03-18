import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from '../../../models/Cliente.model';
import { FirestoreService } from '../../../services/firestore.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-painel-clientes',
  imports: [MatButtonModule, MatIconModule, MatCardModule, DatePipe],
  templateUrl: './painel-clientes.component.html',
  styleUrl: './painel-clientes.component.scss'
})
export class PainelClientesComponent implements OnInit {
  firestoreService = inject(FirestoreService)

  clientes: Array<Cliente> = [];

  ngOnInit(): void {
    this.firestoreService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  onCreateCliente() {
    this.firestoreService.addCliente('testinaldo')
  }
}
