export default class Kartya{
    #adat = {};
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.termekKiir();
        this.kosar = $(".kosarJel:last"); //szimbólum
        this.kattintasEsemeny();


    }
    kattintasEsemeny(){
        this.kosar.on('click', () => {
            console.log(this.#adat);
            const e = new CustomEvent('kosarbaHelyez',{etail: this.#adat})
            window.dispatchEvent(e);
        })

    }

    termekKiir(){
        this.szuloElem.append(`<div class ="termek">
            <p>${this.#adat.elnevezes}</p>
            <img src = "${this.#adat.kep}" alt = "${this.#adat.elnevezes}"/>
             <p>${this.#adat.leiras}</p>
                    <div class = "ar">
                        <p>${this.#adat.ar}</p>
                        <button class="kosarJel" >Kosár</button>
                    </div>
            </div>            `)
    }
}