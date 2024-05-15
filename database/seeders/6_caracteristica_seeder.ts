import Caracteristica from '#models/caracteristica'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Caracteristica.createMany([
      {nome: 'Airbag', tipoId: 1},
      {nome: 'Multimidia', tipoId: 2},
    ])
  }
}