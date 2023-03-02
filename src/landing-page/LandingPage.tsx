import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Button,
  Cards,
  Box,
} from '@cloudscape-design/components';
import { Link, useNavigate } from 'react-router-dom';
import { Course } from '@api-types';
import { Layout } from '@layout/Layout';
import { getMainCourses } from '@services/userSession';
import useAppStore from '@use-AppStore';
import { topButtons } from './TopButtons';
import { banner } from './Banner';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout title="" banner={banner} topButtons={topButtons}>
      <div>
        <h1 style={{ padding: '2rem', textAlign: 'center' }}>
          Nuestros Cursos
        </h1>
        <Cards
          items={[
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/ingles.png',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/excel.jpg',
            },

            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/redes.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/diseno.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/ingles-ninos.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/office.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/alimentos.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/mantenimiento.jpg',
            },
            {
              description: '',
              thumbnail:
                'https://escadi-public-images.s3.amazonaws.com/excel2.jpg',
            },
          ]}
          cardsPerRow={[{ cards: 1 }, { minWidth: 200, cards: 3 }]}
          cardDefinition={{
            sections: [
              {
                id: 'thumbnail',
                content: (item) => (
                  <div>
                    <img width="100%" src={item.thumbnail} />
                  </div>
                ),
              },
              {
                id: 'description',
                content: (item) => (
                  <p style={{ margin: 0 }}>{item.description}</p>
                ),
              },
            ],
          }}
        ></Cards>
      </div>
    </Layout>
  );
};
