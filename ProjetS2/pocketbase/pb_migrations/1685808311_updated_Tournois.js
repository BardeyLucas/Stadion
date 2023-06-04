migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zua2wfj",
    "name": "Sections",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "243n41ootzr2mn2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5staq80zlgqinvc")

  // remove
  collection.schema.removeField("9zua2wfj")

  return dao.saveCollection(collection)
})
