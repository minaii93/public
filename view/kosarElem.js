export default class KosarElem {
    #elem = {};
    constructor(elem, szuloElem ){
        this.#elem = elem;
        this.szuloElem = szuloElem;
        this.kosar = $(".kosarJel:last"); 
        this.kattintasEsemeny();
        this.kosarElemKiir();


    }
    kattintasEsemeny(){
        this.kosar.on('click', () => {
            console.log(this.#elem);
            const e = new CustomEvent('kosarbaHelyez',{etail: this.#elem})
            window.dispatchEvent(e);
        })

    }

    kosarElemKiir(){
        this.szuloElem.append()
    }
    }
