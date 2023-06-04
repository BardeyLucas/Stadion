migrate((db) => {
  const collection = new Collection({
    "id": "243n41ootzr2mn2",
    "created": "2023-06-03 14:38:26.081Z",
    "updated": "2023-06-03 14:38:26.081Z",
    "name": "Section",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gowjn5jj",
        "name": "jeux",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ghhdg20y",
        "name": "mode_jeux",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vzgyieyj",
        "name": "mode_affrontement",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oqrgdliu",
        "name": "emplacement",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kc2hpjib",
        "name": "regles",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hgabppxq",
        "name": "tarif",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l4khh8vj",
        "name": "date_lancement",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("243n41ootzr2mn2");

  return dao.deleteCollection(collection);
})
