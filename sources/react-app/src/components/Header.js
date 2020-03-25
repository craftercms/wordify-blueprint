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
import { Link, NavLink } from 'react-router-dom';
import { useNavigation } from '../shared/hooks';

export default function Header() {
  const nav = useNavigation();
  return (
    <header role="banner">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-9 social">
              <a href="/"><span className="fa fa-twitter"/></a>
              <a href="/"><span className="fa fa-facebook"/></a>
              <a href="/"><span className="fa fa-instagram"/></a>
              <a href="/"><span className="fa fa-youtube-play"/></a>
            </div>
            <div className="col-3 search-top">
              <form action="#" className="search-top-form">
                <span className="icon fa fa-search" />
                <input type="text" id="s" placeholder="Type keyword to search..." />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container logo-wrap">
        <div className="row pt-5">
          <div className="col-12 text-center">
            <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button"
               aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
            <h1 className="site-logo"><Link to="/">Wordify</Link></h1>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              {
                nav?.map(page =>
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
