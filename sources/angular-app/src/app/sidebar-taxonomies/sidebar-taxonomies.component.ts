import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-sidebar-taxonomies',
  templateUrl: './sidebar-taxonomies.component.html',
  styleUrls: ['./sidebar-taxonomies.component.scss']
})
export class SidebarTaxonomiesComponent implements OnInit {
  @Input() title;
  @Input() filter;
  @Input() baseUrl;
  @Input() listClass;
  public filteredTaxonomies;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getTaxonomies()
      .subscribe(response => {
        this.filteredTaxonomies = response.filter(this.filter)[0].items.item;
      })
  }

}
