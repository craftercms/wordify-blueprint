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
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import { Field } from '@craftercms/experience-builder/react';
import { useRecentPosts } from '../shared/hooks';

function Slider(props) {

  const {
    model
  } = props;

  let posts_o = useRecentPosts();
  if (props.model.posts_o.length !== 0) {
    posts_o = props.model.posts_o;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const component = posts_o[currentIndex];

  return (
    <Field model={model} className="owl-carousel owl-theme owl-loaded home-slider">
      <div className="owl-stage-outer">
        <Field model={model} fieldId="posts_o" className="owl-stage">
          <Field
            key={component.craftercms.id}
            className="owl-item active"
            model={model}
            fieldId="posts_o"
            index={currentIndex}
            style={{ width: '100%' }}
          >
            <PostCard
              tags="Food"
              model={component}
              showBlurb
              format={IMAGE_BACKGROUND}
              classes={{ root: 'height-lg', innerWrapper: 'half-to-full' }}
            />
          </Field>
        </Field>
        <div className="owl-dots">
          {
            posts_o?.map((component, index) =>
              <button
                key={index}
                className={`owl-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ><span /></button>
            )
          }
        </div>
      </div>
    </Field>
  );
}

export default Slider;
