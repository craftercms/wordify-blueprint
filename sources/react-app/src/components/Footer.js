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
import { Link } from 'react-router-dom';
import { useFooter, usePencil } from '../shared/hooks';

export default function Footer({ socialLinks }) {
  const footer = useFooter();
  const ice =  usePencil({ model: footer });

  return (
    <footer className="site-footer" {...ice}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3>{footer?.aboutTitle_s}</h3>
            <p className="mb-4">
              <img src={footer?.aboutImage_s} alt="" className="img-fluid" />
            </p>

            <p>{footer?.about_t}</p>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="row">
              <div className="col-md-6">
                <h3>{footer?.quickLinksTitle_s}</h3>
                <ul className="list-unstyled">
                  {
                    footer?.quickLinks_o.map((link, i) =>
                      <li key={i}>
                        <Link to={link.url_s}>{link.label_s}</Link>
                      </li>
                    )
                  }
                </ul>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-5">
                <div className="mb-5">
                  <h3>{footer?.socialLinksTitle_s}</h3>
                  <ul className="list-unstyled footer-social">
                    {
                      socialLinks?.map((link) =>
                        <li key={link.socialNetwork_s}>
                          <a href={link.url_s} target="_blank" rel="noopener noreferrer">
                            <span className={'fa fa-' + link.socialNetwork_s}></span>
                            {link.label_s}
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            footer &&
            <div className="col-md-12 text-center" dangerouslySetInnerHTML={{ __html: footer.copyright_html_raw }}/>
          }
        </div>
      </div>
    </footer>

  );
}
