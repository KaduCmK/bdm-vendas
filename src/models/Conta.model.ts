import { Timestamp } from "firebase/firestore";
import { Cliente } from "./Cliente.model";
import { Produto } from "./Produto.model";

export interface Conta {
    id?: string;
    cliente: Cliente;
    data: Timestamp;
    produtos: Produto[]
    total: number;
    status: 'aberta' | 'paga';
}