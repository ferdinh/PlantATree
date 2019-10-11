import { Injectable } from '@angular/core';
import { Tree } from './models/tree';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Trees: Tree[] = [];

  constructor() {

    this.Trees.push(new Tree(
      0,
      'Cleveland Pear',
      34.99,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      '../assets/tree/American Elder.jpg'
    ));

    this.Trees.push(new Tree(
      1,
      'American Hazelnut',
      10.98,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      '../assets/tree/American Hazelnut.jpg'
    ));

    this.Trees.push(new Tree(
      2,
      'Nectarine Springred',
      49.99,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      '../assets/tree/Nectarine Springred.jpg'
    ));

    this.Trees.push(new Tree(
      3,
      'Kusaie Lime',
      27.99,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      '../assets/tree/Kusaie Lime.jpg'
    ));

    this.Trees.push(new Tree(
      4,
      'Michelia Figo',
      11.99,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      '../assets/tree/Michelia Figo.jpg'
    ));
  }

  getProducts(): Tree[] {
    return this.Trees;
  }
}
