import TipoCaracteristica from '#models/tipo_caracteristica'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await TipoCaracteristica.createMany([
      {nome: 'Segurança'},
      {nome: 'Conforto'},
    ])
  }
}