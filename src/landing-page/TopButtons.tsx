import { Button } from '@cloudscape-design/components';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const topButtons = (
  <div style={{ paddingBottom: '1rem' }}>
    <Button>
      <Link style={{ color: '#539fe5' }} to="/">
        Inicio
      </Link>
    </Button>
    &nbsp
    <Button>
      <Link style={{ color: '#539fe5' }} to="/catalog/courses">
        Catálogo de Cursos
      </Link>
    </Button>
    &nbsp
    <Button>
      <Link style={{ color: '#539fe5' }} to="/about">
        Quiénes Somos
      </Link>
    </Button>
    &nbsp
    <Button>
      <Link style={{ color: '#539fe5' }} to="/contact">
        Contacto
      </Link>
    </Button>
  </div>
);
