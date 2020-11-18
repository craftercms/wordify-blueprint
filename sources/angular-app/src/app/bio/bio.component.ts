import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  @Input() bio;
  public name;
  public profilePic;
  public bioText;
  public showLinkButton;
  public linkButtonText;
  public linkButtonUrl;
  public facebookLink;
  public twitterLink;
  public instagramLink;
  public youTubeLink;

  constructor() {
  }

  ngOnInit(): void {
    // TODO: can be used directly from bio. ???
    this.name = this.bio.name_s;
    this.profilePic = this.bio.profilePic_s;
    this.linkButtonUrl = this.bio.linkButtonUrl_s;
    this.showLinkButton = this.bio.showLinkButton_b;
    this.linkButtonText = this.bio.linkButtonText_s;
    this.bioText = this.bio.bio_t;
    this.facebookLink = this.bio.facebookLink_s;
    this.twitterLink = this.bio.twitterLink_s;
    this.instagramLink = this.bio.instagramLink_s;
    this.youTubeLink = this.bio.youTubeLink_s;
  }

}
