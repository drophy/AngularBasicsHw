export class Product {
    uid: number;
    name: string;
    rating: number;
    description: string;
    price: number;
    stock: number;
    constructor(uid, name, rating, description, price, stock) {
        this.uid = uid;
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}