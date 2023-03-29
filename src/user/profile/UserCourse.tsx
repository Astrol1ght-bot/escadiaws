import React, { useEffect, useRef, useState } from 'react';
import { Amplify, Storage } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import { Container } from '@cloudscape-design/components';
import { GetCourseQuery } from '../../API';
import { Button } from 'primereact/button';
import awsExports from '../../aws-exports';
import { Layout } from '../../container/Layout/Layout';
import useAppStore from 'src/store/useAppStore';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { getCourse } from 'src/graphql/queries';
import { usePublicElement } from 'src/services/swrHooks';

Amplify.configure(awsExports);

export const UserCourse: React.FC = () => {
  const isProfessor = useAppStore((state) => state.isProfessor);
  const params = useParams();
  const [files, setFiles] = useState<(string | undefined)[]>();

  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const userAuth = cognitoUser !== undefined;
  const { data, isLoading, error, isValidating } = usePublicElement<GetCourseQuery>(
    getCourse,
    userAuth,
    params.id,
  );

  const getFiles = async () => {
    const allFiles = (await Storage.list(`${params.id}`)).results
      .map((file) => file.key?.split('/')[1])
      .filter((file) => file);
    console.log(allFiles);
    setFiles(allFiles);
  };

  useEffect(() => {
    if (!files) {
      getFiles();
    }
  }, [files]);

  const toast = useRef<Toast>(null);

  const showToast = () => {
    toast?.current?.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Archivo(s) subido(s) con éxito',
      life: 3000,
    });
  };

  const uploadFile = async (val: File[], courseId: string) => {
    await Promise.all(
      Array.from(val).map((file) =>
        Storage.put(`${courseId}/${file.name}`, file, {
          contentType: file.type,
        }),
      ),
    );

    await getFiles();

    showToast();
  };

  const downloadFile = async (name: string) => {
    const signedURL = await Storage.get(`${params.id}/${name}`);
    window.open(signedURL, '_blank');
  };

  return (
    <Layout title={data?.getCourse?.name ?? ''}>
      <Container>
        <h1>{data?.getCourse?.name} | Archivos</h1>
        <Toast ref={toast}></Toast>
        <div className='flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2'>
          {isProfessor && (
            <FileUpload
              maxFileSize={1000000}
              mode='basic'
              chooseLabel={'Subir Archivo(s)'}
              auto
              multiple
              onSelect={(val) => uploadFile(val.files, params.id ?? '')}
            />
          )}
        </div>
        <div style={{ paddingTop: '10px' }}>
          {files &&
            files.map((file) => (
              <div key={file}>
                <Button severity='secondary' text onClick={() => downloadFile(file ?? '')}>
                  <span className='pi pi-file' style={{ paddingRight: '10px' }}></span>
                  {file}
                </Button>
              </div>
            ))}
        </div>
      </Container>
    </Layout>
  );
};
