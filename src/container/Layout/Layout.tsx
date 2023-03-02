import React from 'react';
import { AppLayout, BreadcrumbGroup } from '@cloudscape-design/components';
import { Amplify } from 'aws-amplify';
import { ErrorBoundary } from 'react-error-boundary';

import awsExports from 'src/aws-exports';
import useAppStore from 'src/store/useAppStore';
import { TopMenu } from './TopMenu';
import { SideMenu } from './SideMenu';
import { Footer } from './Footer';
import { ContentHeader } from './ContentHeader';
import { ErrorFallback } from '../DataManagement/ErrorFallback';

Amplify.configure(awsExports);

type Props = {
  children: React.ReactElement;
  title: string;
  topButtons?: React.ReactElement;
  breadCrumbs?: {
    text: string;
    href: string;
  }[];
  banner?: JSX.Element;
};

export const Layout: React.FC<Props> = ({
  breadCrumbs,
  children,
  title,
  topButtons,
  banner,
}) => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  return (
    <>
      <TopMenu />
      <AppLayout
        content={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
          </ErrorBoundary>
        }
        toolsHide
        navigation={<SideMenu />}
        navigationHide={!cognitoUser}
        contentHeader={<ContentHeader buttons={topButtons} banner={banner} />}
        contentType="form"
        headerSelector="#header"
        footerSelector="#footer"
        breadcrumbs={
          <BreadcrumbGroup items={breadCrumbs || []} ariaLabel="Breadcrumbs" />
        }
      />
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  topButtons: <span />,
  breadCrumbs: [],
};
