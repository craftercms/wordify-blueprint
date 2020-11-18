/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { defaultData } from '../pagination/pagination.component';
import { map } from 'rxjs/operators';
import { parseDescriptor, preParseSearchResults } from '@craftercms/content';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() state;
  public results = [];
  public paginationData = defaultData;
  public keyword = '';
  public bios_o;
  public totalResults = 0;

  constructor(private contentService: ContentService, private actRoute: ActivatedRoute){}

  getResults(): void {
    this.contentService.searchPosts(
      this.keyword,
      this.paginationData.itemsPerPage,
      (this.paginationData.currentPage * this.paginationData.itemsPerPage)
    )
      .pipe(    // TODO: move this to service, error in service
        map(({ hits, total, ...rest }) => {
          const parsedHits = hits.map(({ _source }) => parseDescriptor(
            preParseSearchResults(_source)
          ));
          return { ...rest, hits: parsedHits, total: total.value??total };
        })
      )
      .subscribe(response => {
        this.paginationData.pageCount = Math.ceil(response.total / this.paginationData.itemsPerPage);
        this.results = response.hits;
        this.totalResults = response.total
      });
  }

  onPageChange(page: number) {
    this.paginationData.currentPage = page;
    this.getResults();
  }

  ngOnInit(): void {
    this.bios_o = this.state.model.bios_o;
    this.paginationData.itemsPerPage = this.state.meta.posts.limit;
    this.actRoute.queryParams.subscribe(parameters => {
      this.keyword = parameters.q;
      this.getResults();
    });
  }
}
