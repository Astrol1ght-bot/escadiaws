import React, { useEffect, useState } from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { Button } from 'primereact/button';
import { SelectField, TextField } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useFetcher, useNavigate } from 'react-router-dom';
import {
  CreateEnrollmentInput,
  GetEnrollmentQuery,
  EnrollmentStatus,
} from '../../API';
import { Amplify, Storage } from 'aws-amplify';

import { Chip } from 'primereact/chip';

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
  const [file, setFile] = useState<string>();
  const makeOptions = (options: string[]) => (
    <>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </>
  );

  useEffect(() => {
    if (!file) {
      downloadFile();
    }
  })

  const downloadFile = async () => {
    const signedURL = await Storage.get(order?.getEnrollment?.filekey ?? '');
    setFile(signedURL);
    window.open(signedURL, '_blank');
  };


  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button onClick={() => navigate('/admin/enrollments')}>
            Cancelar
          </Button>
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            severity={"success"}
          >
            {order ? 'Actualizar' : 'Crear'}
          </Button>
        </SpaceBetween>
      }
      header={
        <Header

          description=""
        >
          {title}
        </Header>
      }
    >

      <div className="surface-0">
        <ul className="list-none p-0 m-0">


        

        <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Estudiante:</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{order?.getEnrollment?.student?.name}</div>
        </li>

        <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Correo:</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{order?.getEnrollment?.student?.emai}</div>
        </li>

        <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Curso:</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{order?.getEnrollment?.courseName}</div>
        </li>

        <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Total:</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">₡{order?.getEnrollment?.total}</div>
        </li>

          <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Comprobante de pago:</div>
            <Button severity='secondary' text onClick={() => downloadFile()}>
              <span className='pi pi-file' style={{ paddingRight: '10px' }}></span>
              <img className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" src={file} />
            </Button>
          </li>



          <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Estado:</div>
            <SelectField
              className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1"
              {...register('status', { required: true })}
              label=""
              defaultValue={order?.getEnrollment?.status}
              hasError={errors.total && true}
              errorMessage="Añade un estado a la matrícula"
            >


              {makeOptions(Object.values(EnrollmentStatus))}
            </SelectField>
          </li>



        </ul>
      </div>

    </Form>
  );
};

EnrollmentForm.defaultProps = {
  order: undefined,
};
