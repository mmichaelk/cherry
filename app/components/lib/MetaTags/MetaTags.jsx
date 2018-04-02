import React from 'react';

import { Helmet } from 'react-helmet';
import ogImage from './og-image.jpg';

const MetaTags = () => (
  <Helmet>
    {/* <meta property="og:url" content="" /> */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Experience the new level of safety." />
    <meta
      property="og:description"
      content="Cherry’s best-in-class AI provides your family with the safest,
      smartest and most-private home possible."
    />
    <meta property="og:image" content={ogImage} />
  </Helmet>
);

export default MetaTags;
