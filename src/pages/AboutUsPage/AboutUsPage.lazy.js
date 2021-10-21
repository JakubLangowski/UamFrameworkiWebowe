import React, { lazy, Suspense } from 'react';

const LazyAboutUsPage = lazy(() => import('./AboutUsPage'));

const AboutUsPage = props => (
  <Suspense fallback={null}>
    <LazyAboutUsPage {...props} />
  </Suspense>
);

export default AboutUsPage;
