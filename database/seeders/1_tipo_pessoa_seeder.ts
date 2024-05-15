import TipoPessoa from '#models/tipo_pessoa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await TipoPessoa.createMany([
      {nome: 'Gerente'},
      {nome: 'Vendedor'},
      {nome: 'Cliente'}
    ])
  }
}