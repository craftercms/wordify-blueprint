import { Component, Input, OnInit } from '@angular/core';
import Utils from '../utils';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() tags = '';
  @Input() model;
  @Input() showBlurb = false;
  @Input() format = PORTRAIT;
  @Input() classes;
  @Input() numOfComments;
  public mainImage_s;
  public blurb_t;
  public headline_s;
  public dateModified;
  public type;
  public authorAvatarUrl;
  public authorName;
  public slug;
  public categories;

  constructor() {
  }

  ngOnInit(): void {
    this.type = this.format;
    this.mainImage_s = this.model.mainImage_s;
    this.headline_s = this.model.headline_s;
    this.dateModified = Utils.formatDate(this.model.craftercms.dateModified);
    this.blurb_t = this.model.blurb_t;
    this.authorAvatarUrl = this.model.authorBio_o[0].profilePic_s;
    this.authorName = this.model.authorBio_o[0].name_s;
    this.slug = Utils.computeSlug(this.model.craftercms.path);
    this.categories = this.model.categories_o;
  }

}
