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

export const defaultData = {
  currentPage: 0,
  itemsPerPage: 1,
  pageCount: 1
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage;
  @Input() itemsPerPage;
  @Input() pageCount;
  @Input() onPageChange;
  public paginationData = defaultData;

  public pageChange(page: number) {
    this.paginationData.currentPage = page;
    this.onPageChange(page);
  }

  constructor() {}

  ngOnInit(): void {
    this.paginationData = {
      ...this.paginationData,
      currentPage: this.currentPage,
      itemsPerPage: this.itemsPerPage,
      pageCount: this.pageCount
    }
  }
}
