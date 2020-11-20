import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

export interface Footer {
  aboutImage_s: string;
  aboutTitle_s: string;
  about_t: string;
  copyright_html_raw: string;
  quickLinksTitle_s: string;
  socialLinksTitle_s: string;
  quickLinks_o: {
    label_s: string;
    url_s: string;
  }[];
  craftercms: {};
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footer: Footer;
  public socialLinks = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getFooter()
      .subscribe(response => {
        this.footer = response;
      });

    this.contentService.getLevelDescriptor()
      .subscribe(levelDescriptor => {
        this.socialLinks = levelDescriptor.socialLinks_o;
      })
  }

}
