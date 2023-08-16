import React from 'react';

export function ShowData({ formData }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <p>data:</p>
      <pre style={{ textAlign: 'left' }}>
        {
          JSON.stringify(formData, null, 5)
        }</pre>
    </div>

  )
}