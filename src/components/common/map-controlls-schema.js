export const MapControllsSchema = {
  schema: {
    "type": "object",
    "properties": {
      "hg_fraturado": {
        "type": "boolean",
        "default": false
      },
      "hg_poroso": {
        "type": "boolean",
        "default": false
      },
      "bacia_hidrografica": {
        "type": "boolean",
        "default": false
      },
      "unidade_hidrografica": {
        "type": "boolean",
        "default": false
      },
    }
  },
  uischema: {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "label": "Fraturado",
        "scope": "#/properties/hg_fraturado"
      },
      {
        "type": "Control",
        "label": "Poroso",
        "scope": "#/properties/hg_poroso"
      },
      {
        "type": "Control",
        "label": "Bacia Hidrográfica",
        "scope": "#/properties/bacia_hidrografica"
      },
      {
        "type": "Control",
        "label": "Unidade Hidrográfica",
        "scope": "#/properties/unidade_hidrografica"
      },
    ]
  },
  data: {
    hg_fraturado: false,
    hg_poroso: false,
    bacia_hidrografica: false,
    unidade_hidrografica: false
  }
}