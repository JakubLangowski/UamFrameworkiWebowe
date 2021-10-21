import React, { lazy, Suspense } from 'react';

const LazyPizzaListPage = lazy(() => import('./PizzaListPage'));

const PizzaListPage = props => (
  <Suspense fallback={null}>
    <LazyPizzaListPage {...props} />
  </Suspense>
);

export default PizzaListPage;
