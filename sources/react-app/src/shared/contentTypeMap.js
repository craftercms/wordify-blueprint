import { lazy } from 'react';

export default {
  '/page/entry': lazy(() => import('../pages/Home')),
  '/page/about': lazy(() => import('../pages/About')),
  '/page/contact': lazy(() => import('../pages/Contact')),
  '/page/category': lazy(() => import('../pages/Category')),
  '/page/post': lazy(() => import('../pages/Post')),
  '/component/header': lazy(() => import('../components/Header')),
  '/component/footer': lazy(() => import('../components/Footer')),
  '/component/bio': lazy(() => import('../components/Bio')),
  '/component/image': lazy(() => import('../components/Image')),
  '/component/responsive_columns': lazy(() => import('../components/ResponsiveColumns')),
  '/component/rich_text': lazy(() => import('../components/RichText')),
  '/component/slider': lazy(() => import('../components/Slider'))
};
