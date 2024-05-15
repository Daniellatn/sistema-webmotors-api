import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ano_fabrica').notNullable()
      table.integer('ano_modelo').notNullable()
      table.string('placa', 7).notNullable()
      table.string('cor', 45)
      table.integer('quilometragem')
      table.integer('marca_id').unsigned().references('marcas.id')
      table.integer('modelo_id').unsigned().references('modelos.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}