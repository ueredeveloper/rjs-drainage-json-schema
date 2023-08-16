import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import { coordSchema } from './coord-schema';
import Button from '@mui/material/Button';
import { ShowData } from './show-data';


const schema = coordSchema.schema
const uischema = coordSchema.uischema;
const initialData = coordSchema.data;

export function CoordPaper() {

  const [formData, setFormData] = useState(initialData);

  const handleSave = (newData) => {
    setFormData(newData);
  };

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
        <Button variant="contained" color="primary" sx={{ mx: 1 }} onClick={() => handleSave(formData)}>
          Save
        </Button></div>
      <ShowData formData={formData} />
    </div>
  );
}