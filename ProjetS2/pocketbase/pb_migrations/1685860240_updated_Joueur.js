migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t7ap8yrh",
    "name": "LP",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urzlrzwc",
    "name": "rank",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr")

  // remove
  collection.schema.removeField("t7ap8yrh")

  // remove
  collection.schema.removeField("urzlrzwc")

  return dao.saveCollection(collection)
})
