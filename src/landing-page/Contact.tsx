import { Container, Icon } from '@cloudscape-design/components';

import React from 'react';
import { Layout } from 'src/container/Layout/Layout';
import { contactBanner } from './Banner';
import { topButtons } from './TopButtons';

export const Contact = () => (
  <Layout title="" banner={contactBanner} topButtons={topButtons}>
    <Container>
      <Icon />
    </Container>
  </Layout>
);
