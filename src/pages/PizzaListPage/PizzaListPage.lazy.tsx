import React, { lazy, Suspense } from 'react';

const LazyPizzaListPage = lazy(() => import('./PizzaListPage'));

interface Props {

}

const PizzaListPage = (props: Props) => (
  <Suspense fallback={null}>
    <LazyPizzaListPage {...props} />
  </Suspense>
);

export default PizzaListPage;
