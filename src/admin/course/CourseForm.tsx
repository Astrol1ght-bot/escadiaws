import React, { useEffect, useState } from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { Divider, Flex, SwitchField, TextField, Text, SelectField } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateCourseInput, GetCourseQuery } from 'src/API';

import { Dropdown } from 'primereact/dropdown';
import { getUsersList } from 'src/services/userSession';
import useAppStore from 'src/store/useAppStore';
import { UserData } from 'src/store/storeTypes';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateCourseInput) => void;
  title: string;
  course?: GetCourseQuery;
};

export const CourseForm: React.FC<Props> = ({ isLoading, onSubmit, course }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCourseInput>();
  const navigate = useNavigate();

  const { usersList, isUserListError, isUsersListLoading, mutate } = getUsersList();

  const [professors, setProfessors] = useState<UserData[]>([]);

  const [professor, setProfessor] = useState<string>();

  useEffect(() => {
    if (!isUsersListLoading) {
      setProfessors(usersList?.filter((user) => user.isProfessor) ?? []);
    }
  }, [usersList, isUsersListLoading]);

  useEffect(() => {
    setProfessor(course?.getCourse?.professor);
  }, [course]);

  const makeOptions = (options) => (
    <>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </>
  );

  return (
    <Form
      actions={
        <SpaceBetween direction='horizontal' size='xs'>
          <Button variant='link' onClick={() => navigate('/admin/courses/')}>
            Cancelar
          </Button>
          <Button
            loading={isLoading}
            formAction='submit'
            onClick={() => handleSubmit(onSubmit)()}
            variant='primary'
          >
            {course ? 'Actualizar' : 'Crear'}
          </Button>
        </SpaceBetween>
      }
    >
      <Container header={<Header variant='h3' />}>
        <SpaceBetween direction='vertical' size='l'>
          <TextField
            label='Nombre'
            {...register('name', { required: true })}
            hasError={errors.name && true}
            errorMessage='Añade un nombre.'
            defaultValue={course?.getCourse?.name}
          />
          <TextField
            label='Precio'
            {...register('price', { required: true })}
            hasError={errors.price && true}
            errorMessage='Añade un precio.'
            defaultValue={course?.getCourse?.price}
          />
          <TextField
            label='Thumbnail URL'
            {...register('thumbnail', { required: true })}
            hasError={errors.thumbnail && true}
            errorMessage='Añade un thumbnail.'
            defaultValue={course?.getCourse?.thumbnail}
          />
          <TextField
            label='Descripción'
            {...register('description', { required: true })}
            hasError={errors.description && true}
            errorMessage='description'
            defaultValue={course?.getCourse?.description ?? ''}
          />
          <SelectField
            {...register('professor', { required: true })}
            label='Profesor'
            hasError={errors.professor && true}
            errorMessage='Selecciona un profesor'
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          >
            {makeOptions(professors.map((x) => x.name))}
          </SelectField>
        </SpaceBetween>
      </Container>
    </Form>
  );
};

CourseForm.defaultProps = {
  course: undefined,
};
