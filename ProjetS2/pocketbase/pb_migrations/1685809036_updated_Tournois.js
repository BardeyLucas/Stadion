migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cghbmexm",
    "name": "Fin_Inscription",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
