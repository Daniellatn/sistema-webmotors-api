import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'imagems'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.string('tipo', 200).notNullable()
      table.string('imagem', 200).notNullable()
      table.integer('veiculo_id').unsigned().references('veiculos.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}