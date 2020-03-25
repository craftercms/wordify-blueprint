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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p className="mb-4">
              <img src="/static-assets/images/img_1.jpg" alt="" className="img-fluid" />
            </p>

            <p>Lorem ipsum dolor sit amet sa ksal sk sa, consectetur adipisicing elit. Ipsa harum inventore
              reiciendis. <Link to="/">Read More</Link></p>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="row">
              <div className="col-md-7">
                <h3>Latest Post</h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src="/static-assets/images/img_6.jpg" alt="" className="mr-4" />
                        <div className="text">
                          <h4>How to Find the Video Games of Your Youth</h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> &bullet;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/static-assets/images/img_3.jpg" alt="" className="mr-4" />
                        <div className="text">
                          <h4>How to Find the Video Games of Your Youth</h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> &bullet;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="/static-assets/images/img_4.jpg" alt="" className="mr-4" />
                        <div className="text">
                          <h4>How to Find the Video Games of Your Youth</h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> &bullet;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-4">

                <div className="mb-5">
                  <h3>Quick Links</h3>
                  <ul className="list-unstyled">
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Travel</Link></li>
                    <li><Link to="/">Adventure</Link></li>
                    <li><Link to="/">Courses</Link></li>
                    <li><Link to="/">Categories</Link></li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h3>Social</h3>
                  <ul className="list-unstyled footer-social">
                    <li><Link to="/"><span className="fa fa-twitter"></span> Twitter</Link></li>
                    <li><Link to="/"><span className="fa fa-facebook"></span> Facebook</Link></li>
                    <li><Link to="/"><span className="fa fa-instagram"></span> Instagram</Link></li>
                    <li><Link to="/"><span className="fa fa-vimeo"></span> Vimeo</Link></li>
                    <li><Link to="/"><span className="fa fa-youtube-play"></span> Youtube</Link></li>
                    <li><Link to="/"><span className="fa fa-snapchat"></span> Snapshot</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small">

              Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
              This template is made with <i className="fa fa-heart text-danger" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>

            </p>
          </div>
        </div>
      </div>
    </footer>

  );
}
