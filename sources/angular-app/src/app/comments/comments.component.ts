import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() id;
  @Input() websiteShortname;

  constructor() { }

  ngOnInit(): void {
    const DISQUS_SCRIPT = 'disq_script';
    const sd = document.getElementById(DISQUS_SCRIPT);
    if (!sd) {
      var disqus_config = function() {
        this.page.url = window.location.origin
        this.page.identifier = this.id
      }

      const d = document;
      const s = d.createElement('script');
      s.src = `https://${this.websiteShortname??'DISQUS'}.disqus.com/embed.js`;
      s.id = DISQUS_SCRIPT;
      s.async = true;
      // @ts-ignore
      s.setAttribute('data-timestamp', + new Date());

      d.body.appendChild(s);
    } else {
      // @ts-ignore
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      });
    }
  }

}
