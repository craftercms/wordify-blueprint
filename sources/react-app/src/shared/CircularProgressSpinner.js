import React from 'react';

export default function CircularProgressSpinner(props) {
  const { message } = props;
  return (
    <div className="circular-progress-spinner circular-progress-spinner__screen-height">
      <div className="circular-progress-spinner--graphic-container">
        <svg className="circular-progress-spinner--graphic">
          <circle className="circular-progress-spinner--path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
      {
        message &&
        <p className="circular-progress-spinner--message">{message}</p>
      }
    </div>
  );
}
