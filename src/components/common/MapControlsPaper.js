import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import { MapControllsSchema } from './map-controlls-schema';
import { ShowData } from './show-data';


const schema = MapControllsSchema.schema;
const uischema = MapControllsSchema.uischema;
const initialData = MapControllsSchema.data;

export function MapControllsPaper() {

  const [formData, setFormData] = useState(initialData);

  return (
    <div style={{ display: "flex", flexDirection: 'column' }} >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={formData}
          renderers={materialRenderers}
          onChange={({ errors, data }) => setFormData(data)}
        />
      </div>
      <ShowData formData={formData} />
    </div>
  );
}