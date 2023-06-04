migrate((db) => {
  const collection = new Collection({
    "id": "5staq80zlgqinvc",
    "created": "2023-06-03 14:01:37.880Z",
    "updated": "2023-06-03 14:01:37.880Z",
    "name": "Tournois",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pugqipuh",
        "name": "name",
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
        "id": "cghbmexm",
        "name": "Inscription",
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
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc");

  return dao.deleteCollection(collection);
})
