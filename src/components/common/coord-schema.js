export const coordSchema = {
  schema: {
    "type": "object",
    "properties": {
      "lat": {
        "type": "string",
        "title": "Latitude",
        "description": "Por favor entrar com a latitude do ponto"
      },
      "lng": {
        "type": "string",
        "title": "Longitude",
        "description": "Por favor entrar com a longitude do ponto"
      }
    }
  },
  uischema: {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/lat"
      },
      {
        "type": "Control",
        "scope": "#/properties/lng"
      }
    ]
  },
  data: {
    lat: "-15.0000",
    lng: "-47.0000"
  }
}