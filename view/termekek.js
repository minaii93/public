import Kartya from "./kartya.js";

export default class Termekek{
    #lista = [];
    constructor(lista, szuloElem){
        console.log(lista);
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.kartyaKiir();
        this.termekekKiir();
    }

    kartyaKiir(){
        this.#lista.forEach((kartya, index) => {
            kartya.id = index;
            new Kartya(kartya,this.szuloElem );

        })
    }

    termekekKiir(){
        this.szuloElem.append(`
            <div class ="termekek">
            </div>
            `)
    }
}