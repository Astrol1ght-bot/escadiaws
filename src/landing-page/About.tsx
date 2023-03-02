import { Container } from '@cloudscape-design/components';

import React from 'react';
import { Layout } from 'src/container/Layout/Layout';
import { aboutUsBanner } from './Banner';
import { topButtons } from './TopButtons';

export const About = () => (
  <Layout title="" banner={aboutUsBanner} topButtons={topButtons}>
    <Container>
      <h1>Misión</h1>
      <p>
        Brindar una oferta académica y de servicios de calidad, contribuyendo al
        crecimiento integral de profesionales con actitud innovadora y
        emprendedora mediante la integración de la docencia, la investigación y
        la vinculación con el sector productivo y educativo potenciando con ello
        la aplicación y la gestión de las tecnologías de información,
        comunicación y los recursos involucrados dentro del que hacer de
        distintas disciplinas para el logro de una sociedad del conocimiento
        humanista, equitativa y desarrollada.
      </p>
      <h1>Visión</h1>
      <p>
        Impulsar y liderar una gestión humanista, de excelencia, innovadora y
        pertinente en el uso de Tecnologías de la Información y comunicación.
      </p>
      <h1>Desarrollo de TICS en la organización</h1>
      <p>
        El instituto cuenta con un departamento docente que se encarga de
        coordinar las tecnologías de información y comunicación entre los
        profesores y estudiantes. Dispone de tres laboratorios de informática
        con computadoras, proyectores, televisores. Además de tres aulas de
        idiomas con proyectores, televisores, grabadoras, DVD para las clases.
        Los profesores de informática y de idioma, cuenta con herramientas como
        computadoras, proyector, televisor, internet para el uso de redes
        sociales, chat, correos, Word, Excel, Power Point, Access, Publisher,
        Outlook, YouTube, Navegadores, entre otros, para impartir sus lecciones.
        Con base a esto, los profesores medirán actitudes de los estudiantes
        considerando su nivel para el uso de cualquier de estos dispositivos.
        Tanto los profesores de informática como los de idioma, poseen la
        preparación adecuada para el uso de estas tecnologías. Todas estrategias
        didácticas impartidas en clases están vinculadas a las TICS, el
        estudiante las pone en práctica en el aula y luego con base a trabajos
        que envían los profesores, ellos dan seguimiento y ponen en práctica las
        destrezas obtenidas en clase. En cuanto a la parte administrativa el
        gerente, administrador, coordinador, secretaria y asesores cuentan con
        equipo de cómputo para realizar su trabajo cotidiano.
      </p>
    </Container>
  </Layout>
);
