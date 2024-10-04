import TermekModell from "../model/termekekModel.js";
import Termekek from "../view/termekek.js";

export default class TermekekController{
    constructor(){
        this.termekModell = new TermekModell();
        const lista = this.termekModell.getList()
        this.termekView = new Termekek(lista, $(".termekek"))
        this.kosarbaTesz();
    }
}