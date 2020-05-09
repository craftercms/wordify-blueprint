import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSearchQuery } from './hooks';

let count = 0;

export default function (props) {
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
