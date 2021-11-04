import React, { lazy, Suspense } from 'react';

const LazyAboutUsPage = lazy(() => import('./AboutUsPage'));

interface Props {}

const AboutUsPage = (props : Props) => (
  <Suspense fallback={null}>
    <LazyAboutUsPage {...props} />
  </Suspense>
);

export default AboutUsPage;
