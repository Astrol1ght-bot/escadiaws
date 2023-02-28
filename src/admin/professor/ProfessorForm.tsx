import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import {
  Divider,
  Flex,
  SwitchField,
  TextField,
  Text,
} from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateProfessorInput, GetProfessorQuery } from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateProfessorInput) => void;
  title: string;
  course?: GetProfessorQuery;
};

export const ProfesorForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  course,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProfessorInput>();
  const navigate = useNavigate();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/admin/professors/')}>
            Cancel
          </Button>
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {course ? 'Update' : 'Submit'}
          </Button>
        </SpaceBetween>
      }
    >
      <Container header={<Header variant="h3"></Header>}>
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="Nombre"
            {...register('name', { required: true })}
            hasError={errors.name && true}
            errorMessage="Añade un nombre."
            defaultValue={course?.getProfessor?.name}
          />
          <TextField
            label="Cognito id"
            {...register('cognitoId', { required: true })}
            hasError={errors.cognitoId && true}
            errorMessage="Añade un identificador de cognito."
            defaultValue={course?.getProfessor?.cognitoId}
          />
        </SpaceBetween>
      </Container>
    </Form>
  );
};

ProfesorForm.defaultProps = {
  course: undefined,
};
