import React, { useEffect, useState } from 'react';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import { getItem, parseDescriptor } from '@craftercms/content/esm2015';

const D = '{-}'; // divider
const C = {
  baseUrl: process.env.REACT_APP_CRAFTERCMS_BASE_URL,
  site: process.env.REACT_APP_CRAFTERCMS_SITE_ID
};

export default function (props) {

  const {
    model: {
      craftercms: {
        id
      },
      posts_o
    }
  } = props;

  // region "Sample"

  const [posts, setPosts] = useState(null);
  const paths = posts_o?.reduce(
    (accum, { key }, index) => `${accum}${index ? D : ''}${key}`,
    ''
  );

  useEffect(() => {
    let invalid = false;
    paths && Promise.all(
      paths.split(D).map((path) => getItem(path, C).toPromise())
    ).then(parseDescriptor).then((loadedPosts) => {
      (!invalid) && Promise.all(
        loadedPosts.flatMap(
          ({ authorBio_o }) => authorBio_o.map(bio => bio.craftercms.path)
        ).map(path => getItem(path, C).toPromise())
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
      const $carousel = window.$('.home-slider');
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
      }
    }
  }, [posts]);

  return (
    <div className="owl-carousel owl-theme home-slider">
      {
        posts?.map(model =>
          <div key={model.craftercms.id}>
            <PostCard
              tags="Food"
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
