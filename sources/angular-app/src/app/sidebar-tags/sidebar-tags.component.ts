import { Component, Input, OnInit } from '@angular/core';
import Utils from '../utils';

@Component({
  selector: 'app-sidebar-tags',
  templateUrl: './sidebar-tags.component.html',
  styleUrls: ['./sidebar-tags.component.scss']
})
export class SidebarTagsComponent implements OnInit {
  public filter;

  constructor() {
  }

  ngOnInit(): void {
    this.filter = Utils.createTaxonomyFilter('tags.xml');
  }

}
