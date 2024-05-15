import Marca from '#models/marca'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Marca.createMany([
      {nome: 'Volkswagen', sigla: 'VW'},
      {nome: 'Chevrolet', sigla: 'GM'}
    ])
  }
}