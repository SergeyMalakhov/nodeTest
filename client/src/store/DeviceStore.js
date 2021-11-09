import { makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 3, name: 'Смартфоны'},
            {id: 6, name: 'ноуткбуки'},
            {id: 8, name: 'Пылесосы'},
            {id: 9, name: 'Lenovo'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 3, name: 'Samsung'},
        ]
        this._devices = [
            
                {id: 1, name: '12pro', price: 100000, rating: 0, img: "../server/static/28612da8-41be-4a5c-88c9-1c52953003b3jpeg"},
                {id: 2, name: '12pro', price: 100000, rating: 0, img: "28612da8-41be-4a5c-88c9-1c52953003b3jpeg"},
                {id: 3, name: '12pro', price: 100000, rating: 0, img: "28612da8-41be-4a5c-88c9-1c52953003b3jpeg"},
                {id: 4, name: '12pro', price: 100000, rating: 0, img: "28612da8-41be-4a5c-88c9-1c52953003b3jpeg"},
            

        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    
    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}