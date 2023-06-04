migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m2tilywk",
    "name": "point_SB",
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
    "id": "21s2t9sw",
    "name": "rank_SB",
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
    "id": "nf5fz4jq",
    "name": "point_VA",
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
    "id": "qb8f9bce",
    "name": "rank_VA",
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
    "id": "vxrilr0o",
    "name": "point_SF",
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
    "id": "fhkjszpn",
    "name": "rank_SF",
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
    "id": "fpawxwft",
    "name": "point_OV",
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
    "id": "ce8thkz8",
    "name": "rank_OV",
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
    "id": "j8ztt2jk",
    "name": "point_LL",
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
    "id": "q5todldm",
    "name": "rank_LL",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pyfsk20a9p6gomr")

  // remove
  collection.schema.removeField("m2tilywk")

  // remove
  collection.schema.removeField("21s2t9sw")

  // remove
  collection.schema.removeField("nf5fz4jq")

  // remove
  collection.schema.removeField("qb8f9bce")

  // remove
  collection.schema.removeField("vxrilr0o")

  // remove
  collection.schema.removeField("fhkjszpn")

  // remove
  collection.schema.removeField("fpawxwft")

  // remove
  collection.schema.removeField("ce8thkz8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j8ztt2jk",
    "name": "LP",
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
    "id": "q5todldm",
    "name": "rank",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
