import React, { useEffect } from 'react';
import { Container, Header, Button, Cards, Box } from '@cloudscape-design/components';
import { Link, useNavigate } from 'react-router-dom';
import { Course } from 'src/API';
import { Layout } from 'src/container/Layout/Layout';
import { getMainCourses } from 'src/services/userSession';
import useAppStore from 'src/store/useAppStore';

export const CourseCatalog: React.FC = () => {
  const navigate = useNavigate();
  const isLogged = useAppStore((state) => state.isLogged);
  const setCourses = useAppStore((state) => state.setCourses);
  const { courses, isCoursesLoading, isCoursesError, isValidating } = getMainCourses(isLogged);
  const catalogCourses = !isCoursesLoading ? courses?.data.listCourses.items : ([] as Course[]);

  useEffect(() => {
    if (catalogCourses) {
      setCourses(catalogCourses);
    }
  }, [catalogCourses]);

  return (
    <Layout title='Cursos'>
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
                      <img width='100%' src={p.thumbnail} alt={p.name} />
                    </Link>
                  ),
                },
                {
                  id: 'description',
                  content: (p) => <p style={{ margin: 0 }}>{p.description}</p>,
                },
                {
                  id: 'price',
                  content: (p) => <h2 style={{ margin: 0 }}>${p.price}</h2>,
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
