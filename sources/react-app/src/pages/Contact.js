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

import React, { useState } from 'react';
import BaseLayout from '../shared/BaseLayout';
import RecentPostsAside from '../shared/RecentPostsAside';
import SidebarBios from '../shared/SidebarBios';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import Toast from '../components/Toast';
import { defineMessages, useIntl } from 'react-intl';

const translations = defineMessages({
  contactSuccess: {
    id: 'contact.contactSuccess',
    defaultMessage: 'Message successfully sent!'
  }
});

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

const initialToastData = {
  display: false,
  type: '',
  text: ''
}

function Contact(props) {
  const {
    model,
    model: {
      headline_s,
      message_t
    },
    meta: {
      siteTitle,
      socialLinks
    }
  } = props;

  const { formatMessage } = useIntl();
  const [formData, setFormData] = useState(initialFormData);
  const [toastData, setToastData] = useState(initialToastData);
  const showToast = (text, type) => {
    setToastData({
      display: true,
      text,
      type
    });
    setTimeout(() => {
      setToastData(initialToastData);
    }, 3000);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = function(e) {
    e.preventDefault();

    ajax.post(
      '/api/contactus.json',
      formData,
      {
        'Content-Type': 'application/json'
      }
    ).pipe(
      catchError(error => [error])
    ).subscribe(response => {
      if (response.name === 'AjaxError') {
        showToast('There was an error sending the message', 'danger');
      } else {
        setFormData(initialFormData);
        showToast(formatMessage(translations[response.response.messageKey]), 'success');
      }
    });
  }

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h1>{headline_s}</h1>
              <p>{message_t}</p>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Write Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      cols="30"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary"/>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"/>
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                  </div>
                </form>
              </div>

              <SidebarBios model={model} fieldId="bios_o" />

              <RecentPostsAside />

              <SidebarCategories />

              <SidebarTags />

            </div>

          </div>
        </div>
      </section>

      <Toast
        display={toastData.display}
        type={toastData.type}
        text={toastData.text}
      />
    </BaseLayout>
  );
}

export default Contact;
