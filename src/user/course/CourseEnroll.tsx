import React, { useEffect, useRef, useState } from 'react';
import { Heading, Flex, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@cloudscape-design/components';
import {
  GetCourseQuery,
  CreateEnrollmentInput,
  CreateStudentInput,
  EnrollmentStatus,
  GetStudentQuery,
} from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { getCourse, getStudent } from 'src/graphql/queries';
import { usePublicElement } from 'src/services/swrHooks';
import useAppStore from 'src/store/useAppStore';
import { Storage } from 'aws-amplify';
import { RadioButton } from 'primereact/radiobutton';
import { getUserProfile } from '../../services/userSession';
import { createEnrollment, createStudent } from 'src/graphql/mutations';
import { addElement, getElement } from 'src/services/apiMutations';

import { Splitter, SplitterPanel } from 'primereact/splitter';

import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

export const CourseEnroll: React.FC = () => {
  const setToogleState = useAppStore((state) => state.setToogleState);
  const navigate = useNavigate();
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const userAuth = cognitoUser !== undefined;
  const userProfile = getUserProfile(cognitoUser);
  const params = useParams();
  const [ingredient, setIngredient] = useState('');
  const [fileData, setFileData] = useState<File>();
  const [fileStatus, setFileStatus] = useState(false);
  const [laoading, setLoading] = useState(false);
  const { user } = useAuthenticator((context) => [context.user]);
  const { data, error, isLoading, isValidating } = usePublicElement<GetCourseQuery>(
    getCourse,
    userAuth,
    params.id,
  );
  const [client, setClient] = useState<GetStudentQuery | null>(null);

  const toast = useRef<Toast>(null);
  const userdata: CreateStudentInput = {
    id: cognitoUser?.getUsername(),
    name: user.attributes?.name,
    emai: user.attributes?.email,
  };

  const enrollment: CreateEnrollmentInput = {
    status: EnrollmentStatus.pendiente,
    date: new Date().toISOString(),
    studentEnrollmentsId: cognitoUser?.getUsername(),
    filekey: '',
    courseID: data?.getCourse?.id.toString() ?? '',
    courseName: data?.getCourse?.name ?? '',
    total: data?.getCourse?.price.toString() ?? '',
    thumbnail: data?.getCourse?.thumbnail ?? '',
  };

  const [image, setImage] = useState<string>();

  const getImageUrl = async (name) => {
    const url = await Storage.get('thumbnails/' + name);
    setImage(url);
  };

  useEffect(() => {
    if (!image && data?.getCourse?.thumbnail) getImageUrl(data?.getCourse?.thumbnail);
  }, [data]);

  const makeEnrollment = async () => {
    if (!fileData) return;
    setFileStatus(true);

    setLoading(true);
    const { key } = await Storage.put(
      `${cognitoUser?.getUsername()}/${data?.getCourse?.id}`,
      fileData,
      {
        contentType: fileData.type,
      },
    );

    enrollment.filekey = key; // set filekey here
    console.log(enrollment);
    if (cognitoUser?.getUsername()) {
      getElement(cognitoUser?.getUsername(), getStudent)
        .then((response) => {
          response.data?.getStudent
            ? addElement(enrollment, createEnrollment)
                .then(() => navigate('/profile/courses', { replace: true }))
                .catch((e) => {
                  console.error('Error al hacer la matricula: ' + e);
                })
                .finally(() => setLoading(false))
            : addElement(userdata, createStudent)
                .then(() => {
                  setToogleState();
                  addElement(enrollment, createEnrollment)
                    .then(() => navigate('/profile/courses', { replace: true }))
                    .catch((e) => {
                      console.error('Error al hacer la matricula: ' + e);
                    })
                    .finally(() => setLoading(false));
                })
                .catch((e) => {
                  console.error('Error when creating student profile: ' + e);
                });
        })
        .catch((e) => console.log('Error when getting student profile' + e));
    }
  };

  const uploadFile = (val: File) => {
    setFileData(val);
    if (!fileData) return;
    showToast();
  };

  const showToast = () => {
    toast?.current?.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Imágen subida con éxito',
      life: 3000,
    });
  };

  return (
    <Layout
      title=''
      breadCrumbs={[
        { text: 'Catálogo de Cursos', href: '/catalog/courses' },
        { text: data?.getCourse?.name || '', href: '#' },
      ]}
    >
      <Container>
        {data?.getCourse && (
          <DataContainer isLoading={isLoading} isValidating={isValidating} errors={error}>
            <Toast ref={toast} />
            <Splitter style={{ height: '300px' }}>
              <SplitterPanel
                className='flex align-items-center justify-content-center'
                size={10}
                minSize={10}
              >
                <Flex
                  direction='row'
                  justifyContent='center'
                  alignItems='stretch'
                  alignContent='flex-start'
                  wrap='nowrap'
                  gap='1rem'
                  marginTop={'15%'}
                >
                  <div className='flex flex-wrap gap-3'>
                    <div className='flex align-items-center'>
                      <RadioButton
                        inputId='sinpe'
                        name='sinpe'
                        value='sinpe'
                        onChange={(e) => setIngredient(e.value)}
                        checked={ingredient === 'sinpe'}
                      />
                      <label htmlFor='sinpe' className='ml-2'>
                        Sinpe Móvil
                        <br />
                        62103990
                      </label>
                      <br />
                      <span></span>
                    </div>
                  </div>
                </Flex>
              </SplitterPanel>
              <SplitterPanel size={80}>
                <Splitter layout='vertical'>
                  <SplitterPanel
                    className='flex align-items-center justify-content-center'
                    size={10}
                  >
                    <Heading marginLeft={'20%'} level={3}>
                      {data.getCourse.name}
                    </Heading>
                    <Flex
                      direction='row'
                      justifyContent='flex-start'
                      alignItems='stretch'
                      alignContent='flex-start'
                      wrap='nowrap'
                      gap='1rem'
                      marginLeft={'20%'}
                      marginTop={'10px'}
                    >
                      <img width='50%' src={image} alt={data.getCourse.name} />
                    </Flex>
                  </SplitterPanel>
                </Splitter>
              </SplitterPanel>
            </Splitter>

            {ingredient === 'sinpe' ? (
              <Splitter>
                <SplitterPanel className='flex align-items-center justify-content-center' size={80}>
                  <FileUpload
                    onSelect={(e) => uploadFile(e.files?.[0])}
                    accept='image/*'
                    emptyTemplate={
                      <p className='m-0'>Arrastra la imágen de tu comprobante aquí!</p>
                    }
                    uploadLabel={'Subir Imágen'}
                    chooseLabel={'Seleccionar Imágen'}
                    cancelLabel={'Cancelar'}
                    auto
                  />

                  <Flex
                    direction='row'
                    justifyContent='center'
                    alignItems='stretch'
                    alignContent='flex-start'
                    wrap='nowrap'
                    gap='1rem'
                    marginLeft={'15%'}
                  >
                    <Button loading={laoading} onClick={makeEnrollment}>
                      Matricular
                    </Button>
                  </Flex>
                </SplitterPanel>
              </Splitter>
            ) : (
              <></>
            )}
          </DataContainer>
        )}
      </Container>
    </Layout>
  );
};
