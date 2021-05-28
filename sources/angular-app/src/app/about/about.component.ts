import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { defaultData } from '../pagination/pagination.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() state;
  public posts_o;
  public bios_o;
  public headline_s;
  public content_o;
  public numOfPages;
  public paginationData = defaultData;

  constructor(private contentService: ContentService) {
  }

  getPosts(): void {
    this.contentService.getPosts(null, null, null, this.paginationData)
      .subscribe(response => {
        this.paginationData.pageCount = Math.ceil(response.total / this.paginationData.itemsPerPage);
        this.posts_o = response.items;
      });
  }

  onPageChange(page: number) {
    this.paginationData.currentPage = page;
    this.getPosts();
  }

  ngOnInit(): void {
    this.headline_s = this.state.model.headline_s;
    this.bios_o = this.state.model.bios_o;
    this.content_o = this.state.model.content_o;
    this.paginationData.itemsPerPage = this.state.meta.posts.limit;

    this.getPosts();
  }
}
