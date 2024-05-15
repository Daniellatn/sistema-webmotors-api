import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 200).notNullable()
      table.timestamp('data_nascimento').notNullable()
      table.string('sexo', 1)
      table.string('celular', 11).notNullable()
      table.integer('tipo_id').unsigned().references('tipo_pessoas.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}