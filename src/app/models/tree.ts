export class Tree {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;

  constructor(id: number, name: string, price: number, description: string, img_url: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.img_url = img_url;
  }
}
