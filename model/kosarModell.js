import { termekLista } from "./termekLista.js"

export default class KosarModell{
    #lista = []
    constructor() {
        this.#lista = [];
    }

    szurtLista(){
        return this.#lista;
    }

    kivalaszt(termek){
        this.#lista.push(termek)
    }

    
}