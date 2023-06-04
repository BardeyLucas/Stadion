migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("243n41ootzr2mn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9l82uv56",
    "name": "inscrit",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mx8bimul",
    "name": "emplacement",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oqrgdliu",
    "name": "localisation",
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
  const collection = dao.findCollectionByNameOrId("243n41ootzr2mn2")

  // remove
  collection.schema.removeField("9l82uv56")

  // remove
  collection.schema.removeField("mx8bimul")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
