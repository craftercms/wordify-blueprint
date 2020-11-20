import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-recent-posts-aside',
  templateUrl: './recent-posts-aside.component.html',
  styleUrls: ['./recent-posts-aside.component.scss']
})
export class RecentPostsAsideComponent implements OnInit {
  public posts = [];

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getPosts()
      .subscribe(response => {
        this.posts  = response.items;
      });
  }

}
