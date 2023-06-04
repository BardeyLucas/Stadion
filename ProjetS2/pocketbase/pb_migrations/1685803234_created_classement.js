migrate((db) => {
  const collection = new Collection({
    "id": "jmpfbrj3zm0a2zk",
    "created": "2023-06-03 14:40:34.692Z",
    "updated": "2023-06-03 14:40:34.692Z",
    "name": "classement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v85loybe",
        "name": "cach_prize",
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
  const collection = dao.findCollectionByNameOrId("jmpfbrj3zm0a2zk");

  return dao.deleteCollection(collection);
})
