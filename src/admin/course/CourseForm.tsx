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
import { CreateCourseInput, GetCourseQuery } from 'src/API';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateCourseInput) => void;
  title: string;
  course?: GetCourseQuery;
};

export const CourseForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  course,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCourseInput>();
  const navigate = useNavigate();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/admin/courses/')}>
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
      <Container header={<Header variant="h3" />}>
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="Nombre"
            {...register('name', { required: true })}
            hasError={errors.name && true}
            errorMessage="Añade un nombre."
            defaultValue={course?.getCourse?.name}
          />
          <TextField
            label="Precio"
            {...register('price', { required: true })}
            hasError={errors.price && true}
            errorMessage="Añade un precio."
            defaultValue={course?.getCourse?.price}
          />
          <TextField
            label="Thumbnail URL"
            {...register('thumbnail', { required: true })}
            hasError={errors.thumbnail && true}
            errorMessage="Añade un thumbnail."
            defaultValue={course?.getCourse?.thumbnail}
          />
          <TextField
            label="Descripción"
            {...register('description', { required: true })}
            hasError={errors.description && true}
            errorMessage="description"
            defaultValue={course?.getCourse?.description ?? ''}
          />
        </SpaceBetween>
      </Container>
    </Form>
  );
};

CourseForm.defaultProps = {
  course: undefined,
};
