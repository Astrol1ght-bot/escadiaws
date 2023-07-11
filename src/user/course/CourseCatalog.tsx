import { Container, Cards, Box, Button } from '@cloudscape-design/components';
import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
import { Course } from 'src/API';
import { Layout } from 'src/container/Layout/Layout';
import { catalogBanner } from 'src/landing-page/Banner';
import { topButtons } from 'src/landing-page/TopButtons';
import { getMainCourses } from 'src/services/userSession';
import useAppStore from 'src/store/useAppStore';
import { Image } from 'src/store/storeTypes';

export const CourseCatalog: React.FC = () => {
  const navigate = useNavigate();
  const isLogged = useAppStore((state) => state.isLogged);
  const setCourses = useAppStore((state) => state.setCourses);
  const { courses, isCoursesLoading, isCoursesError, isValidating } = getMainCourses(isLogged);
  const catalogCourses = !isCoursesLoading ? courses?.data.listCourses.items : ([] as Course[]);

  useEffect(() => {
    if (catalogCourses) setCourses(catalogCourses);
  }, [catalogCourses]);

  const [imageMap, setImageMap] = useState<Image[]>();

  const getImageUrl = async (name) => {
    return await Storage.get('thumbnails/' + name);
  };

  useEffect(() => {
    if (catalogCourses.length > 0 && !imageMap) {
      Promise.all(
        catalogCourses.map((item) =>
          getImageUrl(item.thumbnail).then((result) => ({ id: item.thumbnail, url: result })),
        ),
      ).then((r) => {
        setImageMap(r);
        console.log(r);
      });
    }
  }, [courses, imageMap]);

  return (
    <Layout title='' banner={catalogBanner} topButtons={topButtons}>
      <Container>
        {isCoursesError && !isCoursesLoading && <h3>Error cargando los cursos</h3>}
        {catalogCourses && (
          <Cards
            cardDefinition={{
              sections: [
                {
                  id: 'thumbnail',
                  content: (p: Course) => (
                    <Link to={`/catalog/courses/view/${p.id}`}>
                      <img
                        width='100%'
                        src={imageMap?.find((i) => i.id == p?.thumbnail)?.url}
                        alt={p.name}
                      />
                    </Link>
                  ),
                },
                {
                  id: 'description',
                  content: (p) => <p style={{ margin: 0 }}>{p.description}</p>,
                },
                {
                  id: 'price',
                  content: (p) => <h2 style={{ margin: 0 }}>₡{p.price}</h2>,
                },
                {
                  id: 'link',
                  content: (p) => (
                    <Box textAlign='center'>
                      <Button
                        iconName='add-plus'
                        iconAlign='right'
                        onClick={() => navigate(`/catalog/courses/view/${p.id}`)}
                      >
                        Ver mas información
                      </Button>
                    </Box>
                  ),
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 200, cards: 3 }]}
            items={catalogCourses.map((product: Course) => ({
              name: product?.name,
              description: product?.description,
              thumbnail: product?.thumbnail,
              price: product?.price,
              id: product?.id,
            }))}
            loading={isCoursesLoading || isValidating}
            loadingText='Cargando cursos'
            trackBy='id'
            empty={
              <Box textAlign='center' color='inherit'>
                <b>No hay cursos</b>
              </Box>
            }
          />
        )}
      </Container>
    </Layout>
  );
};
