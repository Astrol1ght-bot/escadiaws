import React from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import useAppStore from '@use-AppStore';
import awsExports from '@aws-exports';

const TopNavCustom = styled(TopNavigation)`
  button[type='submit'] {
    background: #fff !important;
  }
`;

Amplify.configure(awsExports);

export const TopMenu: React.FC = () => {
  const { totalItems } = useCart();
  const { signOut } = useAuthenticator((context) => [context.user]);
  const userProfile = useAppStore((state) => state.userProfile);
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const resetUserSession = useAppStore((state) => state.resetUserSession);
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut();
    resetUserSession();
    navigate('/');
  };

  const authenticatedMenuItems = [
    {
      id: 'sign-out',
      text: 'Sign Out',
    },
  ];

  return (
    <div id="header">
      <TopNavCustom
        identity={{
          href: '/',
          title: 'Escadi',
        }}
        i18nStrings={{
          overflowMenuBackIconAriaLabel: 'back-icon',
          overflowMenuDismissIconAriaLabel: 'dismiss-icon',
          overflowMenuTitleText: 'title-text',
          overflowMenuTriggerText: 'trigger-text',
          searchDismissIconAriaLabel: 'dismiss-search',
          searchIconAriaLabel: 'search-icon',
        }}
        utilities={[
          cognitoUser
            ? {
                type: 'menu-dropdown',
                text: `Profile`,
                iconName: 'user-profile',
                items: authenticatedMenuItems,
                onItemClick: (item) => {
                  item.detail.id === 'sign-out'
                    ? signOutUser()
                    : navigate(`/${item.detail.id}`);
                },
              }
            : {
                type: 'button',
                variant: 'link',
                text: 'Iniciar Sesión',
                onClick: () => navigate('profile/signin'),
              },
        ]}
      />
    </div>
  );
};
