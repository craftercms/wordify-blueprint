import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.scss']
})
export class CommentsCountComponent implements AfterViewInit {
  @Input() id;
  @Input() websiteShortname;
  public origin;

  constructor() {
    this.origin = window.location.origin;
  }

  ngAfterViewInit(): void {
    const DISQUS_COUNT_SCRIPT = 'dsq-count-scr';
    const disqusCountEl = document.getElementById(DISQUS_COUNT_SCRIPT);

    if (!disqusCountEl) {
      const d = document;
      const s = d.createElement('script');
      s.src = `https://${this.websiteShortname ?? 'DISQUS'}.disqus.com/count.js`;
      s.id = DISQUS_COUNT_SCRIPT;
      s.async = true;

      d.body.appendChild(s);
    }
  }

}
