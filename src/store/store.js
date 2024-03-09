import { makeAutoObservable } from "mobx";

export class Store {
    constructor() {
        this._value = 0;

        makeAutoObservable(this);
    }
    
    setValue(value) {
        if (this._value === 0) {
            this._value = '';
        }

        this._value += value;
    }

    resetValue() {
        this._value = 0;
    }

    setSigh() {
        this._value *= (-1);
    }

    setEval() {
        this._value = eval(this._value);
    }

    setFraction() {
        this._value /= 100;
    }

    get value() {
        return this._value;
    }
}
