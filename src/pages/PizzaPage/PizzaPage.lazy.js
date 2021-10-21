import React, { lazy, Suspense } from 'react';

const LazyPizzaPage = lazy(() => import('./PizzaPage'));

const PizzaPage = props => (
  <Suspense fallback={null}>
    <LazyPizzaPage {...props} />
  </Suspense>
);

export default PizzaPage;
