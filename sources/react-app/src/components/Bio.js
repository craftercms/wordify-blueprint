import React from 'react';

export default function (props) {
  const {
    ice,
    model: {
      // craftercms: {
      //   id,
      //   contentTypeId,
      //   label,
      //   path,
      // },
      bio_t,
      name_s,
      profilePic_s,
      linkButtonText_s,
      linkButtonUrl_s,
      showLinkButton_b
    }
  } = props;
  return (
    <>
      <div className="bio text-center" {...ice}>
        <img src={profilePic_s} alt="" className="img-fluid"/>
        <div className="bio-body">
          <h2>{name_s}</h2>
          <p>{bio_t}</p>
          {
            showLinkButton_b &&
            <p>
              <a href={linkButtonUrl_s} className="btn btn-primary btn-sm rounded">
                {linkButtonText_s}
              </a>
            </p>
          }
          <p className="social">
            <a href="/" className="p-2"><span className="fa fa-facebook"/></a>
            <a href="/" className="p-2"><span className="fa fa-twitter"/></a>
            <a href="/" className="p-2"><span className="fa fa-instagram"/></a>
            <a href="/" className="p-2"><span className="fa fa-youtube-play"/></a>
          </p>
        </div>
      </div>
    </>
  );
}
