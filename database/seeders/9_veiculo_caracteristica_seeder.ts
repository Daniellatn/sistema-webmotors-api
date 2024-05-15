import VeiculoCaracteristica from '#models/veiculo_caracteristica'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await VeiculoCaracteristica.createMany([
      {caracteristicaId: 2, veiculoId: 1}
    ])
  }
}