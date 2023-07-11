import { Container, Icon } from '@cloudscape-design/components';

import React from 'react';
import { Layout } from 'src/container/Layout/Layout';
import { contactBanner } from './Banner';
import { topButtons } from './TopButtons';

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

export const Contact = () => (
  <Layout title="" banner={contactBanner} topButtons={topButtons}>
    <Container>
    <div className="p-grid p-jc-center">
      <div className="p-col-12 p-md-6">
        <Panel header="Información de contacto">
          <div className="p-grid">
            <div className="p-col-12">
              <p>
                <i className="pi pi-fw pi-phone"></i> Teléfono: +506 2262-6914
              </p>
              <p>
                <i className="pi pi-fw pi-map-marker"></i> Ubicación: La dirección es 50 metros al sur de la comandancia de Heredia, en la provincia de Heredia
              </p>
            </div>
            <div className="p-col-12">
            </div>
          </div>
        </Panel>
      </div>
    </div>
 
    </Container>
  </Layout>
);
