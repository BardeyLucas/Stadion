migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qvcfjmd4",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // remove
  collection.schema.removeField("qvcfjmd4")

  return dao.saveCollection(collection)
})
