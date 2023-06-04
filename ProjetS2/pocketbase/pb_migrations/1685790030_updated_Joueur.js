migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rawuvv8r",
    "name": "pdp",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "idn894xs",
    "name": "Email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qohmracy",
    "name": "Phone",
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
    "id": "md1ygblg",
    "name": "Mdp",
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
    "id": "bogsyccj",
    "name": "region",
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
    "id": "mvwdl2kl",
    "name": "Bio",
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
    "id": "qoppvslh",
    "name": "naissance",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k1lybjfl",
    "name": "first_name",
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
    "id": "ggukawpu",
    "name": "name",
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
  collection.schema.removeField("rawuvv8r")

  // remove
  collection.schema.removeField("idn894xs")

  // remove
  collection.schema.removeField("qohmracy")

  // remove
  collection.schema.removeField("md1ygblg")

  // remove
  collection.schema.removeField("bogsyccj")

  // remove
  collection.schema.removeField("mvwdl2kl")

  // remove
  collection.schema.removeField("qoppvslh")

  // remove
  collection.schema.removeField("k1lybjfl")

  // remove
  collection.schema.removeField("ggukawpu")

  return dao.saveCollection(collection)
})
