import { Component, Input, OnInit } from '@angular/core';
import Utils from '../utils';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit {
  public filter;

  constructor() {}

  ngOnInit(): void {
    this.filter = Utils.createTaxonomyFilter('categories.xml');
  }

}
