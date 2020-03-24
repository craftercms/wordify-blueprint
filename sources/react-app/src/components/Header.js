import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
            <h1 className="site-logo"><a href="/">Wordify</a></h1>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-md  navbar-light bg-light">
        <div className="container">


          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Business</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/category"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"
                >
                  Travel
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <Link className="dropdown-item" to="/category">Asia</Link>
                  <Link className="dropdown-item" to="/category">Europe</Link>
                  <Link className="dropdown-item" to="/category">Dubai</Link>
                  <Link className="dropdown-item" to="/category">Africa</Link>
                  <Link className="dropdown-item" to="/category">South America</Link>
                </div>

              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/category"
                  id="dropdown05"
                  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"
                >
                  Categories
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown05">
                  <Link className="dropdown-item" to="/category">Lifestyle</Link>
                  <Link className="dropdown-item" to="/category">Food</Link>
                  <Link className="dropdown-item" to="/category">Adventure</Link>
                  <Link className="dropdown-item" to="/category">Travel</Link>
                  <Link className="dropdown-item" to="/category">Business</Link>
                </div>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}
