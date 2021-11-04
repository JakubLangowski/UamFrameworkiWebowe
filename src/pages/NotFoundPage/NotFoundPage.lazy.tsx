import React, { lazy, Suspense } from 'react';

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'));

interface Props {}

const NotFoundPage = (props : Props) => (
  <Suspense fallback={null}>
    <LazyNotFoundPage {...props} />
  </Suspense>
);

export default NotFoundPage;
