import React, { lazy, Suspense } from 'react';

const LazyCheckoutPage = lazy(() => import('./CheckoutPage'));

interface Props {

}

const CheckoutPage = (props: Props) => (
  <Suspense fallback={null}>
    <LazyCheckoutPage {...props} />
  </Suspense>
);

export default CheckoutPage;
