import { termekLista } from "./termekLista.js"

export default class TermekModell{
    #lista = []
    constructor(){
        this.#lista = termekLista;

    }

    getList(){
        return this.#lista;
    }

    

    



}