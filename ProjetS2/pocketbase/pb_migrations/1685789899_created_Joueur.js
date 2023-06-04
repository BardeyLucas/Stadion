migrate((db) => {
  const collection = new Collection({
    "id": "pyfsk20a9p6gomr",
    "created": "2023-06-03 10:58:19.560Z",
    "updated": "2023-06-03 10:58:19.560Z",
    "name": "Joueur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ykxbkui",
        "name": "Pseudo",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr");

  return dao.deleteCollection(collection);
})
