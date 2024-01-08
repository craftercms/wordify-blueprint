/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
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

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigation } from '../shared/hooks';
import SearchForm from '../shared/SearchForm';
import { RenderField } from '@craftercms/experience-builder/react';

export default function Header({ model }) {
  const nav = useNavigation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleNavBar = () => setShowMobileMenu(!showMobileMenu);
  return (
    <header role="banner">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <RenderField
              className="col-9 social"
              model={model}
              fieldId="socialLinks_o"
              render={(socialLinks) => socialLinks?.map((link, index) =>
                <RenderField
                  component="a"
                  key={`${link.socialNetwork_s}_${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url_s}
                  model={model}
                  fieldId="socialLinks_o"
                  index={index}
                  render={(link) => <span className={`fa fa-${link.socialNetwork_s}`} />}
                />
              )}
            />
            <div className="col-3 search-top">
              <SearchForm
                classes={{ form: 'search-top-form' }}
                placeholder="Type keyword to search..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container logo-wrap">
        <div className="row pt-5">
          <div className="col-12 text-center">
            <a
              className="absolute-toggle d-block d-md-none"
              data-toggle="collapse"
              href="#navbarMenu"
              onClick={toggleNavBar}
              role="button"
              aria-expanded="false"
              aria-controls="navbarMenu"
            ><span className="burger-lines"/></a>
            <h1 className="site-logo">
              <RenderField model={model} fieldId="siteTitle_s" component={Link} to="/" />
            </h1>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              {
                nav?.sort(
                  (
                    { orderDefault_f: a },
                    { orderDefault_f: b }
                  ) => (a < b) ? -1 : ((a > b) ? 1 : 0)
                ).map((page) =>
                  <li className="nav-item" key={page.url}>
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="active"
                      to={page.url}
                    >
                      {page.navLabel}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}