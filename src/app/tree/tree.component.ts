import { Component, OnInit } from '@angular/core';
import { Tree } from '../models/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

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

  ngOnInit() {
  }

}
