import React from 'react'
import { TopNavigation } from '@cloudscape-design/components'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'
import awsExports from 'src/aws-exports'
import useAppStore from 'src/store/useAppStore'

const TopNavCustom = styled(TopNavigation)`
  button[type='submit'] {
    background: #fff !important;
  }
`

Amplify.configure(awsExports)

export const TopMenu: React.FC = () => {
  const { totalItems } = useCart()
  const { signOut } = useAuthenticator((context) => [context.user])
  const cognitoUser = useAppStore((state) => state.cognitoUser)
  const resetUserSession = useAppStore((state) => state.resetUserSession)
  const navigate = useNavigate()

  const signOutUser = () => {
    signOut()
    resetUserSession()
    navigate('/')
  }

  const authenticatedMenuItems = [
    {
      id: 'sign-out',
      text: 'Sign Out',
    },
  ]

  return (
    <div id='header'>
      <TopNavCustom
        identity={{
          href: '/',
          title: 'Escuela Centroamericana de Informática e Idiomas',
          logo: {
            src: 'https://escadi-public-images.s3.amazonaws.com/logo.jpg',
            alt: 'Escuela Centroamericana de Informática e Idiomas',
          },
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
                text: 'Profile',
                iconName: 'user-profile',
                items: authenticatedMenuItems,
                onItemClick: (item) => {
                  item.detail.id === 'sign-out' ? signOutUser() : navigate(`/${item.detail.id}`)
                },
              }
            : {
                type: 'button',
                variant: 'link',
                text: 'Iniciar Sesión/Registrarse',
                onClick: () => navigate('/profile/signin'),
              },
        ]}
      />
    </div>
  )
}
