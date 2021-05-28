import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { defaultData } from '../pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() state;
  public slider_o;
  public numOfPages;
  public bios_o;
  public posts_o = [];
  public paginationData = defaultData;

  constructor(private contentService: ContentService) {}

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
    this.paginationData.itemsPerPage = this.state.meta.posts.limit;
    this.slider_o = this.state.model.slider_o;
    this.bios_o = this.state.model.bios_o;

    this.getPosts();
  }
}
