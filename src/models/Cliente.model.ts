import { Timestamp } from "firebase/firestore"

export interface Cliente {
    nome: string
    dataCriacao: Timestamp | null
}