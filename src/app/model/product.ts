export class Product{
    public title: string;
    public description: string;
    public photo: string;
    public price: number;
    public stock: number;
    constructor(title, description, photo, price,stock)
    {
        this.description=description;
        this.photo=photo;
        this.price=price;
        this.title=title;
        this.stock=stock;
    }
}