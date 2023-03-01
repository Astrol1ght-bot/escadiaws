import { Layout } from '@layout/Layout';
import React from 'react';
import { contactBanner } from './Banner';
import { topButtons } from './TopButtons';

export const Contact = () => {
  return (
    <Layout title="" banner={contactBanner} topButtons={topButtons}>
      <div>About</div>
    </Layout>
  );
};
