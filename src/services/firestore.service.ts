import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
import {
  addDoc,
  arrayUnion,
  deleteDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { Conta } from '../models/Conta.model';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore = inject(Firestore);
  private clientes = collection(this.firestore, 'clientes');
  private contas = collection(this.firestore, 'contas');

  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return collectionData(this.clientes, { idField: 'id' }) as Observable<
      Cliente[]
    >;
  }

  addCliente(nome: string): Observable<string> {
    const cliente: Cliente = {
      nome: nome,
      dataCriacao: Timestamp.fromDate(new Date()),
    };
    const promise = addDoc(this.clientes, cliente).then((res) => res.id);

    return from(promise);
  }

  getContas(): Observable<Conta[]> {
    return collectionData(this.contas, { idField: 'id' }) as Observable<
      Conta[]
    >;
  }

  addConta(cliente: Cliente): Observable<string> {
    const conta: Conta = {
      cliente: cliente,
      produtos: [],
      data: Timestamp.fromDate(new Date()),
      total: 0,
      status: 'aberta',
    };

    const promise = addDoc(this.contas, conta).then((res) => res.id);
    return from(promise);
  }

  deleteConta(conta: Conta): Observable<void> {
    const docRef = doc(this.firestore, 'contas/' + conta.id);
    return from(deleteDoc(docRef));
  }

  updateConta(conta: Conta): Observable<void> {
    const contaRef = doc(this.firestore, 'contas/' + conta.id);
    const promise = updateDoc(contaRef, { ...conta });

    return from(promise);
  }
}
