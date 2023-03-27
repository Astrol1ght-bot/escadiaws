import React, { useEffect, useState } from 'react';
import { Heading, Flex } from '@aws-amplify/ui-react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { GetCourseQuery, CreateEnrollmentInput, CreateStudentInput, EnrollmentStatus, GetStudentQuery } from 'src/API';
import { DataContainer } from 'src/container/DataManagement/DataContainer';
import { Layout } from 'src/container/Layout/Layout';
import { getCourse, getStudent } from 'src/graphql/queries';
import { usePublicElement } from 'src/services/swrHooks';
import useAppStore from 'src/store/useAppStore';
import { Storage } from "aws-amplify";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { getUserProfile } from '../../services/userSession';
import { createEnrollment, createStudent } from 'src/graphql/mutations';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { addElement, getElement } from 'src/services/apiMutations';

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
  const [isLoading, setLoading] = useState(false);
  const { data, error, isValidating } =
    usePublicElement<GetCourseQuery>(getCourse, userAuth, params.id);
    const [client, setClient] = useState<GetStudentQuery | null>(null);
  
  const uploadFile = () => {
    if(!fileData) return;
    setFileStatus(true);
  }

  const userdata: CreateStudentInput = {
    id: cognitoUser?.getUsername(),
  }

  const makeEnrollment = async () => {
    if (!fileData) return;
    debugger; 

    if (cognitoUser?.getUsername()) {
      getElement(cognitoUser.getUsername(), getStudent)
        .then((response) => {
          response.data?.getStudent
            ? setClient(response.data)
            : addElement(userdata, createStudent)
            .then(() => {
              setToogleState();
            })
            .catch((e) => {
              console.error("Error when creating student profile: "+e)
            });
        })
        .catch((e) => console.log("Error when getting student profile"+e));
    }

    
    setLoading(true);
    
    const {key} = await Storage.put(`${cognitoUser?.getUsername()}/${data?.getCourse?.id}`, fileData, {
      contentType: fileData.type
    });

    const enrollment: CreateEnrollmentInput = {
      status: EnrollmentStatus.pendiente,
      date: new Date().toISOString(),
      filekey: key,
      studentEnrollmentsId: cognitoUser?.getUsername(),
      enrollDetails: {
        courseID: data?.getCourse?.id.toString() ?? "",
        courseName: data?.getCourse?.name ?? "",
        total: data?.getCourse?.price.toString() ?? "",
        courseKeyFIle: data?.getCourse?.keyfile ?? "",
        thumbnail: data?.getCourse?.thumbnail ?? "",
      }
    }

    setFileStatus(true);
    addElement(enrollment, createEnrollment)
      .then(() => navigate('/', { replace: true }))
      .catch((e) => {
        console.error("Error al hacer la matricula: "+e)
      })
      .finally(() => setLoading(false));
    
  };

  return (
    <Layout
      title=""
      breadCrumbs={[
        { text: 'Catálogo de Cursos', href: '/catalog/courses' },
        { text: data?.getCourse?.name || '', href: '#' },
      ]}
    >
      <Container>
        {data?.getCourse && (
          <DataContainer
            isLoading={isLoading}
            isValidating={isValidating}
            errors={error}
          >
            <Heading level={1}>{data.getCourse.name}</Heading>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <img
                width="40%"
                src={data.getCourse.thumbnail}
                alt={data.getCourse.name}
              />
            </Flex>
            <div>
              <div>
                <input type="file" onChange={(e) => setFileData(e.target.files?.[0])} />
              </div>
              <div>
                <button onClick={uploadFile}>Upload file</button>
              </div>
              {fileStatus ? "File uploaded successfully" : ""}
            </div>

            <div className="card flex justify-content-center">
              <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                  <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                  <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                  <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                  <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                  <label htmlFor="ingredient4" className="ml-2">Onion</label>
                </div>
              </div>
            </div>
            <Flex
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
              
              onClick={makeEnrollment}
            >
              <Button
              loading= {isLoading}
              >Matricular</Button>
            </Flex>
          </DataContainer>
        )}
      </Container>
    </Layout>
  );
};
