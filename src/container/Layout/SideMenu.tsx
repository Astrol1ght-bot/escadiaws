import { Divider } from '@aws-amplify/ui-react';
import {
  Box,
  SpaceBetween,
  Cards,
  Button,
} from '@cloudscape-design/components';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Course } from 'src/API';
import useAppStore from 'src/store/useAppStore';

export const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = useAppStore((state) => state.isAdmin);
  const menuProducts = useAppStore((state) => state.menuProducts);

  return (
    <Box padding="xl">
      <h2>Menu</h2>
      <SpaceBetween size="m">
        {!isAdmin ? (
          <Cards
            cardDefinition={{
              header: (p: Course) => (
                <Box textAlign="center">
                  <Link to={`/product/${p.id}`}>
                    <h2>{p.name}</h2>
                  </Link>
                </Box>
              ),
              sections: [
                {
                  id: 'thumbnail',
                  content: (p) => (
                    <Link to={`/product/${p.id}`}>
                      <img width="100%" src={p.thumbnail} alt={p.name} />
                    </Link>
                  ),
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
            items={menuProducts.map((course: Course) => ({
              name: course?.name,
              description: course?.description,
              thumbnail: course?.thumbnail,
              price: course?.price,
              createdAt: course?.createdAt,
              updatedAt: course?.updatedAt,
              __typename: course?.__typename,
              id: course?.id,
            }))}
            loadingText="Loading products"
            trackBy="id"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No products</b>
                <Box padding={{ bottom: 's' }} variant="p" color="inherit">
                  No products to display.
                </Box>
              </Box>
            }
          />
        ) : (
          <>
            <Divider orientation="horizontal" />
            <Button
              variant="link"
              onClick={() => navigate('/admin/courses', { replace: true })}
            >
              Cursos
            </Button>
            <Button
              variant="link"
              onClick={() => navigate('/admin/professors', { replace: true })}
            >
              Profesores
            </Button>
          </>
        )}
      </SpaceBetween>
    </Box>
  );
};
