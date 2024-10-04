import KosarElem from "./kosarElem.js";

export default class KosarTermekek {
    #lista = [];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.kosarKiir();
        this.termekKosarKiir();

    }

    kosarKiir(){
        this.#lista.forEach((elem) => {
            new KosarElem(elem, this.szuloElem )
            
        })
    }

    termekKosarKiir(){
        this.szuloElem.append(
            `<div class "kosar">
            
            </div>`)
    }
}