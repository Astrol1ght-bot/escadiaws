import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { Heading, TextField, useAuthenticator } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { CreateClientInput, GetClientQuery } from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateClientInput) => void;
  title: string;
  client?: GetClientQuery;
};

export const ClientForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  client,
}) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientInput>();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {client ? 'Actualizar' : 'Completar'}
          </Button>
        </SpaceBetween>
      }
    >
      <Container
        header={
          <Header variant="h2">
            {client
              ? 'Puedes actualizar tu perfil aqui:'
              : 'Completa el siguiente formulario:'}
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="Primer nombre"
            {...register('name', { required: true })}
            hasError={errors.name && true}
            errorMessage="Ingresa tu nombre"
            defaultValue={client?.getClient?.name}
          />
          <Heading level={5}>
            Email:
            {user.attributes?.email}
          </Heading>
          
          
        </SpaceBetween>
      </Container>
    </Form>
  );
};

ClientForm.defaultProps = {
  client: undefined,
};
