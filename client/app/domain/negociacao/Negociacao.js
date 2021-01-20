class Negociacao {

    // Construtor da classe
    constructor(_data, _quantidade, _valor) {
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    // Métodos para pegar as propriedades da classe
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    equals(negociacao) {

        return JSON.stringify(this) == JSON.stringify(negociacao);
    }
}