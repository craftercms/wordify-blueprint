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
import { useHistory } from 'react-router-dom';
import { useSearchQuery } from './hooks';

let count = 0;

function SearchForm(props) {
  const history = useHistory();
  const { placeholder = '', id = `searchInput_${count++}` } = props;
  const classes = Object.assign({
    form: '',
    input: '',
    inputWrapper: ''
  }, props.classes);
  const [query, onChange] = useSearchQuery();
  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        query.trim() && history.push(`/search?q=${query}`);
      }}
    >
      <div className={classes.inputWrapper}>
        <span className="icon fa fa-search" />
        <input
          id={id}
          type="text"
          value={query}
          onChange={onChange}
          className={classes.input}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}

export default SearchForm;
