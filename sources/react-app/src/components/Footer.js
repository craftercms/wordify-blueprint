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
import { useFooter } from '../shared/hooks';
import { Field, RenderField } from '@craftercms/studio-guest';

export default function Footer({ model }) {
  const footer = useFooter();
  return (
    <>
      {
        footer &&
        <Field
          model={footer}
          className='site-footer'
        >
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4">
                <RenderField component="h3" model={footer} fieldId="aboutTitle_s" />
                <p className="mb-4">
                  <RenderField
                    component="img"
                    model={footer}
                    renderTarget="src"
                    fieldId="aboutImage_s"
                    alt=""
                    className="img-fluid"
                  />
                </p>
                <RenderField component="p" model={footer} fieldId="about_t" />
              </div>
              <div className="col-md-6 ml-auto">
                <div className="row">
                  <div className="col-md-6">
                    <RenderField component="h3" model={footer} fieldId="quickLinksTitle_s" />
                    <RenderField
                      component="ul"
                      className="list-unstyled"
                      model={footer}
                      fieldId="quickLinks_o"
                      format={(quickLinks_o) => quickLinks_o.map((link, i) =>
                        <Field
                          key={i}
                          component="li"
                          model={footer}
                          fieldId="quickLinks_o"
                          index={i}
                        >
                          <RenderField
                            component={Link}
                            model={footer}
                            fieldId="quickLinks_o.label_s,quickLinks_o.url_s"
                            index={i}
                            renderTarget="children,to"
                          />
                        </Field>
                      )}
                    />
                  </div>
                  <div className="col-md-1"/>
                  <div className="col-md-5">
                    <div className="mb-5">
                      <RenderField component="h3" model={footer} fieldId="socialLinksTitle_s" />
                      <RenderField
                        component="ul"
                        className="list-unstyled footer-social"
                        model={model}
                        fieldId="socialLinks_o"
                        format={(socialLinks) => socialLinks?.map((link, index) =>
                          <RenderField
                            component="li"
                            key={link.socialNetwork_s}
                            model={model}
                            fieldId="socialLinks_o"
                            index={index}
                            format={(link) =>
                              <a href={link.url_s} target="_blank" rel="noopener noreferrer">
                                <span className={`fa fa-${link.socialNetwork_s}`}/> {link.label_s}
                              </a>
                            }
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 text-center"
                dangerouslySetInnerHTML={{ __html: footer.copyright_html_raw }}
              />
            </div>
          </div>
        </Field>
      }
    </>
  );
}
