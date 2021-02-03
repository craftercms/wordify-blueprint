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

import React, { useEffect } from 'react';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import { useGlobalContext } from '../shared/context';
import { Field } from '@craftercms/studio-guest';
import { useRecentPosts } from '../shared/hooks';

function Slider(props) {

  const {
    model
  } = props;

  let posts_o = useRecentPosts();
  if (props.model.posts_o.length !== 0) {
    posts_o = props.model.posts_o;
  }

  const [{ $ }] = useGlobalContext();

  useEffect(() => {
    const $carousel = $('.home-slider');
    // noinspection CheckTagEmptyBody
    $carousel.owlCarousel({
      loop: true,
      autoplay: false,
      margin: 10,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: true,
      items: 1,
      navText: ['<span class="ion-chevron-left"></span>', '<span class="ion-chevron-right"></span>'],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    });
    return () => {
      $carousel.owlCarousel('destroy');
    };
  }, [$]);

  return (
    <Field model={model} className="owl-carousel owl-theme home-slider">
      {
        posts_o?.map((component, index) =>
          <Field model={model} fieldId="posts_o" index={index} key={component.craftercms.id}>
            <PostCard
              tags="Food"
              model={component}
              showBlurb
              format={IMAGE_BACKGROUND}
              classes={{ root: 'height-lg', innerWrapper: 'half-to-full' }}
            />
          </Field>
        )
      }
    </Field>
  );
}

export default Slider;