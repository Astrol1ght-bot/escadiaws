import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { SelectField, TextField } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  CreateEnrollmentInput,
  GetEnrollmentQuery,
  EnrollmentStatus,
} from '../../API';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateEnrollmentInput) => void;
  title: string;
  order?: GetEnrollmentQuery;
};

export const EnrollmentForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  title,
  order,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEnrollmentInput>();
  const navigate = useNavigate();

  const makeOptions = (options: string[]) => (
    <>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </>
  );

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/admin/enrollments')}>
            Cancel
          </Button>
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {order ? 'Update' : 'Submit'}
          </Button>
        </SpaceBetween>
      }
      header={
        <Header
          variant="h1"
          description="Here you can update the state of the order"
        >
          {title}
        </Header>
      }
    >
      <Container>
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="Total"
            {...register('total', { required: true })}
            hasError={errors.total && true}
            errorMessage="Add a total"
            defaultValue={order?.getEnrollment?.total}
          />
          <SelectField
            {...register('status', { required: true })}
            label="Order Status"
            defaultValue={order?.getEnrollment?.status}
            hasError={errors.total && true}
            errorMessage="Add a order status"
          >
            {makeOptions(Object.values(EnrollmentStatus))}
          </SelectField>
        </SpaceBetween>
      </Container>
    </Form>
  );
};

EnrollmentForm.defaultProps = {
  order: undefined,
};
