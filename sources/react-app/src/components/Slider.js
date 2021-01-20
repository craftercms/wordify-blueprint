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

import React, { useEffect, useState } from 'react';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import { getItem, parseDescriptor } from '@craftercms/content/esm2015';
import { usePencil, useRecentPosts } from '../shared/hooks';
import { useGlobalContext } from '../shared/context';
import { crafterConfig } from '../shared/utils';

const D = '{-}'; // divider

function Slider(props) {

  const {
    model: {
      craftercms: {
        id
      }
    }
  } = props;

  let posts_o = useRecentPosts();
  if (props.model.posts_o.length !== 0) {
    posts_o = props.model.posts_o;
  }

  const [{ $ }] = useGlobalContext();
  const ice = usePencil(props);

  // region "Sample"

  const [posts, setPosts] = useState(null);
  const paths = posts_o?.reduce(
    (accum, { craftercms: { path } }, index) => `${accum}${index ? D : ''}${path}`,
    ''
  );

  useEffect(() => {
    let invalid = false;
    paths && Promise.all(
      paths.split(D).map((path) => getItem(path, crafterConfig).toPromise())
    ).then(parseDescriptor).then((loadedPosts) => {
      (!invalid) && Promise.all(
        loadedPosts.flatMap(
          ({ authorBio_o }) => authorBio_o.map(bio => bio.craftercms.path)
        ).map(path => getItem(path, crafterConfig).toPromise())
      ).then(parseDescriptor).then((loadedBios) => {
        (!invalid) && setPosts(
          loadedPosts.map((p) => ({
            ...p,
            authorBio_o: p.authorBio_o.map(
              b => loadedBios.find(lb => b.craftercms.path === lb.craftercms.path)
            )
          }))
        );
      });
    });
    return () => {
      invalid = true;
    };
  }, [id, paths]);

  // endregion

  useEffect(() => {
    if (posts) {
      const $carousel = $('.home-slider');
      $carousel.owlCarousel({
        loop: true,
        autoplay: true,
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
    }
  }, [posts, $]);

  return (
    <div className="owl-carousel owl-theme home-slider" {...ice}>
      {
        posts?.map(model =>
          <div key={model.craftercms.id}>
            <PostCard
              model={model}
              showBlurb
              format={IMAGE_BACKGROUND}
              classes={{ root: 'height-lg', innerWrapper: 'half-to-full' }}
            />
          </div>
        )
      }
    </div>
  );
}

export default Slider;
