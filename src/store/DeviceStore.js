import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types=[
            // {id:1, name: 'Холодильник'},
            // {id:2, name: 'Телевизоры'},
            // {id:3, name: 'Телефоны'},
            // {id:4, name: 'Ноутбуки'}
        ]
        this._brands=[
            { id: 1, name: 'Samsung'},
            { id: 2, name: 'Iphone'},
        ]
        this._devices=[
            { id: 1, name: 'Iphone 12', price: 1000, rating:5, image: 'https://media.wired.com/photos/5f8dfd6db9910f1848191341/master/w_2400,h_1800,c_limit/Gear-iPhone-12-Pro-rear-pacific-blue-SOURCE-Apple.jpg'},
            { id: 2, name: 'Iphone 13', price: 2500, rating:5, image: 'https://media.wired.com/photos/5f8dfd6db9910f1848191341/master/w_2400,h_1800,c_limit/Gear-iPhone-12-Pro-rear-pacific-blue-SOURCE-Apple.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices =devices
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types(){
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get totalCount (){
        return this._totalCount
    }
    get page (){
        return this._page
    }
    get limit(){
        return this._limit
    }
}