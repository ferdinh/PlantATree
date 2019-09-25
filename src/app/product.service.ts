import { Injectable } from '@angular/core';
import { Tree } from './models/tree';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Trees: Tree[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      let tree: Tree = {
        id: i,
        name: 'Tree ' + i,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
        price: 100
      };

      this.Trees.push(tree);
    }
  }

  getProducts(): Tree[] {
    return this.Trees;
  }
}
