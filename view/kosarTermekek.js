import KosarElem from "./kosarElem";

export default class KosarTermekek {
    #lista = [];
    constructor(lista, szuloElem){
        console.log(lista);
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.kosarKiir();
        this.termekKosarKiir();

    }

    kosarKiir(){
        this.#lista.forEach((elem, index) => {
            elem.id = index;
            new KosarElem(elem, this.szuloElem )
        })
    }

    termekKosarKiir(){
        this.szuloElem.append(
            `<div class "kosar"></div>`)
    }
}