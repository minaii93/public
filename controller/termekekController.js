import KosarModell from "../model/kosarModell.js";
import TermekModell from "../model/termekekModel.js";
import KosarTermekek from "../view/kosarTermekek.js";
import Termekek from "../view/termekek.js";

export default class TermekekController{
    constructor(){
        this.termekModell = new TermekModell();
        this.kosarModell = new KosarModell();
        const lista = this.termekModell.getList()
        const kosarLista = this.kosarModell.szurtLista();
        this.termekView = new Termekek(lista, $(".termekek"))
        this.kosarView = new KosarTermekek(kosarLista, $(".kosar"))
        this.kosarbaTesz();
    }

    kosarbaTesz() {
        $(window).on("kosarbaHelyez", (event) => {
            let termek = event.detail;
            console.log(event.detail);
            this.kosarModell.kivalaszt(termek);
            const lista = this.kosarModell.szurtLista();
            this.kosarView = new KosarTermekek(lista, $(".kosar"));
            
            
        });
    }
}