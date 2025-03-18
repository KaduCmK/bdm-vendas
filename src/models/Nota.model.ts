import { Cliente } from "./Cliente.model";
import { Produto } from "./Produto.model";

export interface Nota {
    cliente: Cliente;
    data: Date;
    produtos: Produto[]
    total: number
}