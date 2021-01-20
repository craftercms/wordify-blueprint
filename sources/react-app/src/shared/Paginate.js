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

import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate(props) {
  const {
    pageCount,
    onPageChange
  } = props;

  return(
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      activeClassName="active"
      initialPage={0}
      pageCount={pageCount}
      onPageChange={({ selected: index }) => onPageChange(index) }
      disableInitialCallback={true}
      previousLabel={<span>&lt;</span>}
      nextLabel={<span>&gt;</span>}
    />
  )
}

export default Paginate;
