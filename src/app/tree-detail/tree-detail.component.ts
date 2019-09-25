import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tree } from '../models/tree';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tree-detail',
  templateUrl: './tree-detail.component.html',
  styleUrls: ['./tree-detail.component.css']
})
export class TreeDetailComponent implements OnInit {
  selectedTree: Tree;

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedTree = this.productService.getProducts()[id];
  }

}
