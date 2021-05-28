import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content.service';
import Utils from '../utils';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() state;
  public isTag;
  public itemId;         // category/tag id retrieved from url param
  public items = [];     // list of categories/tags
  public item;           // current category/tag
  public posts_o = [];
  public paginationData = {
    currentPage: 0,
    itemsPerPage: 0,
    pageCount: 0
  };

  constructor(private router: Router, private actRoute: ActivatedRoute, private contentService: ContentService) {
  }

  getPosts(): void {
    this.contentService.getPosts(
      this.isTag ? null : this.item,
      this.isTag ? this.item : null,
      null,
      this.paginationData)
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
    this.isTag = this.router.url.startsWith('/tag');
    this.itemId = this.actRoute.snapshot.params.id;
    this.paginationData.itemsPerPage = this.state.meta.posts.limit;

    const filter = Utils.createTaxonomyFilter(`${this.isTag ? 'tags' : 'categories'}.xml`);

    this.contentService.getTaxonomies()
      .subscribe(response => {
        this.items = response.filter(filter)[0].items.item;

        if(this.itemId) {
          this.item = this.items?.filter(category => category.key === this.itemId)[0];
          this.getPosts();
        }
      })
  }

}
