import { Component, OnInit } from '@angular/core';
import { Tree } from '../models/tree';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  Trees: Tree[] = [];



  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.Trees = this.productService.getProducts();
  }
}
