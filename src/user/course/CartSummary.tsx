import React, { useState } from 'react';
import { Form, SpaceBetween } from '@cloudscape-design/components';
import { Authenticator, SelectField } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

import Button from '@cloudscape-design/components/button';

import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';
import {
  CreateEnrollmentInput,
  EnrollStatus,
  PaymentStatus,
  PaymentType,
} from '@api-types';
import { createEnrollment } from '@graphql/mutations';
import { addElement } from '@services/apiMutations';

import { Layout } from '@layout/Layout';
import useAppStore from '@use-AppStore';
import awsExports from '@aws-exports';
import { CartItems } from '@cart-layout/CartItems';

Amplify.configure(awsExports);



export const CartSummary: React.FC = () => {
  const userProfile = useAppStore((state) => state.userProfile);
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const navigate = useNavigate();
  const { emptyCart, items, cartTotal } = useCart();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addEnrollment = () => {
    const order: CreateEnrollmentInput = {
      
      date: new Date().toISOString(),
      total: cartTotal,
      enrollDetails: items.map((item) => ({
        courseID: item.id,
        courseName: item.courseName,
        courseThumbnail: item.courseThumbnail,
        quantity: item.quantity ?? 1,
        total: item.price
      })),
      status: EnrollStatus.processing,
      paymentStatus: PaymentStatus.procesing,
      paymentType: PaymentType.cash,
      clientEnrolledCoursesId: cognitoUser?.getUsername(),
      
    };
    setLoading(true);
    addElement(order, createEnrollment)
      .then(() => {
        emptyCart();
        navigate('/catalog/courses', { replace: true });
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Cart Summary"
      topButtons={<Button onClick={emptyCart}>Empty Cart</Button>}
      breadCrumbs={[
        { text: 'Catalog', href: '/' },
        { text: 'Cart Summary', href: '#' },
      ]}
    >
      <>
        <CartItems showEmpty={false} />
        {!userProfile && (
          <p>
            Por favor inicia sesión o registrate para completar la matricula
          </p>
        )}
        <Authenticator>
          {!userProfile ? (
            <Button
              onClick={() => navigate('/profile/create')}
              iconName="user-profile"
            >
              llena los datos de tu perfil aqui
            </Button>
          ) : (
            <Form
              actions={
                <SpaceBetween direction="horizontal" size="xs">
                  <Button variant="link" onClick={() => navigate('/')}>
                    Cancelar
                  </Button>
                  <Button
                    loading={isLoading}
                    formAction="submit"
                    onClick={() => handleSubmit(addEnrollment)()}
                    variant="primary"
                  >
                    Crear Matricula
                  </Button>
                </SpaceBetween>
              }
            >

            </Form>
          )}
        </Authenticator>
      </>
    </Layout>
  );
};
