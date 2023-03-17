const fs = require('fs/promises')
const path = require('path')
require('module-alias/register')
const envFilePath = `./.env.${process.env.NODE_ENV}`
require('dotenv').config({ path: envFilePath })
require('module-alias/register')
require('@/models')
const db = require('@/services/db')
const script = process.env.script

const config = {
  seeders_folder: 'seeders',
}

async function migrate() {
  await db.sync({ alter: true })
  console.log('All models were synchronized successfully.')
}

async function seed() {
  await Promise.all(
    Object.values(db.models).map(async (model) => {
      const filePath = path.join(
        __dirname,
        config.seeders_folder,
        `${model.name}.json`
      )
      try {
        const file = await fs.readFile(filePath)
        const data = JSON.parse(file)
        await db.queryInterface.bulkInsert(model.tableName, data)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    })
  )
}

const scripts = {
  migrate,
  seed,
}

scripts[script]?.()
