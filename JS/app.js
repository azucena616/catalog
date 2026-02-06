let products = []
class Product {
    constructor(name, description, price, img){
        this._name = name;
        this._description = description;
        this._price = price;
    }
}

function enviar() {
    let name = document.getElementById("").value
    let description = document.getElementById("").value
    let price = document.getElementById("").value
    let img = document.getElementById("").value

    let product = new Product(name, description, price)
    products.push(product)
}