migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7exxsv3sw0zsv9b")

  // remove
  collection.schema.removeField("nhgq0cnf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7exxsv3sw0zsv9b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhgq0cnf",
    "name": "Title",
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
})
