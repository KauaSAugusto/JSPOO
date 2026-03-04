export class Automovel {

    #marca
    #modelo
    #ano

    constructor(marca, modelo, ano) {
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }
    
    getMarca() {
        return this.#marca
    }
    setMarca(marca) {
        this.#marca
    }
    getModelo() {
        return this.#modelo
    }
    setModelo(modelo) {
        this.#modelo
    }
    getAno() {
        return this.#ano
    }
    setAno(ano) {
        this.#ano
    } 
}