import React from 'react';

export default function (props) {
  const {
    ice,
    model: { image_s, alternativeText_s }
  } = props;
  return (
    <>
      <img {...ice} src={image_s} alt={alternativeText_s || ''} className="img-fluid" />
    </>
  );
}
