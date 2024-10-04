export default class KosarElem {
    #elem = {};
    constructor(elem, szuloElem ){
        this.#elem = elem;
        this.szuloElem = szuloElem;
        this.kosarElemKiir();


    }
 

    kosarElemKiir(){
        this.szuloElem.append(`
            <div class = "kosarElem">
                <p>${this.#elem.elnevezes}</p>
                <p>${this.#elem.ar}</p>
                
            </div>
            `)
    }
    }
