import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() classes;
  @Input() placeholder;
  @Input() id;
  public keyword = '';

  getKeyword(): string {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('q')??'';
  }

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.keyword = this.getKeyword()
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.keyword = this.getKeyword();
      }
    });
  }

  onEnter(): void {
    this.router.navigate(
      ['/search'],
      {
        queryParams: {
          q: this.keyword
        }
      }
    );
  }

}
