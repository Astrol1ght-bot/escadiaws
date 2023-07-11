import React, { useEffect, useRef, useState } from 'react';
import { Storage } from 'aws-amplify';
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
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

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
    setValue,
  } = useForm<CreateCourseInput>();
  const navigate = useNavigate();

  const { usersList, isUserListError, isUsersListLoading, mutate } = getUsersList();

  const [professors, setProfessors] = useState<UserData[]>([]);

  const [professor, setProfessor] = useState<string>();

  const [fileName, setFileName] = useState<string>();

  const [originalFileName, setOriginalFileName] = useState<string>();

  const [thumbnailURL, setThumbnailURL] = useState<string>();

  const downloadFile = async (name) => {
    const signedURL = await Storage.get(name);
    setThumbnailURL(signedURL);
  };

  useEffect(() => {
    if (!isUsersListLoading) {
      setProfessors(usersList?.filter((user) => user.isProfessor) ?? []);
    }
  }, [usersList, isUsersListLoading]);

  useEffect(() => {
    if (course?.getCourse?.thumbnail) {
      setFileName(course?.getCourse?.thumbnail);
      setValue('thumbnail', course?.getCourse?.thumbnail);
      downloadFile('thumbnails/' + course.getCourse.thumbnail);
    }
    if (course?.getCourse?.professor) {
      setProfessor(course?.getCourse?.professor);
      setValue('professor', course?.getCourse?.professor);
    }
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

  const toast = useRef<Toast>(null);

  const showToast = () => {
    toast?.current?.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Imagen subida con éxito',
      life: 3000,
    });
  };

  const uploadFile = async (val: File[]) => {
    const name = uuidv4();
    const thumbnail = val[0];

    await Storage.put(`thumbnails/${name}`, thumbnail, {
      contentType: thumbnail.type,
    });

    setFileName(name);
    setOriginalFileName(thumbnail.name);
    setValue('thumbnail', name);
    downloadFile('thumbnails/' + name);
    showToast();
  };

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

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
            placeholder='Selecciona un profesor'
          >
            {makeOptions(professors.map((x) => x.name))}
          </SelectField>
          <span style={{ fontSize: '16px' }}>Thumbnail</span>
          <FileUpload
            accept='image/*'
            mode='basic'
            chooseLabel={originalFileName ?? 'Subir Imagen'}
            auto
            onSelect={(val) => uploadFile(val.files)}
          />
          <img
            className='pi pi-file'
            style={{ paddingRight: '10px', textDecoration: 'false' }}
            width={150}
            src={thumbnailURL}
          ></img>
          <TextField
            display={'none'}
            label='Thumbnail URL'
            {...register('thumbnail', { required: true })}
            hasError={errors.thumbnail && true}
            errorMessage='Añade un thumbnail.'
            value={fileName}
          />
          <Toast ref={toast}></Toast>
        </SpaceBetween>
      </Container>
    </Form>
  );
};

CourseForm.defaultProps = {
  course: undefined,
};
