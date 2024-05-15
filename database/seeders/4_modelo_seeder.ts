import Modelo from '#models/modelo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Modelo.createMany([
      {nome: 'Gol', cambio: 'Manual', combustivel: 'Flex', motor: '1.0'},
      {nome: 'Celta', cambio: 'Manual', combustivel: 'Flex', motor: '1.0'},
    ])
  }
}