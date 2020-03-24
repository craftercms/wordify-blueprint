import React from 'react';

export default function (props) {
  const {
    ice,
    model: {
      content_html_raw
    }
  } = props;
  return (
    <>
      <div {...ice} dangerouslySetInnerHTML={{ __html: content_html_raw }} />
    </>
  );
}
