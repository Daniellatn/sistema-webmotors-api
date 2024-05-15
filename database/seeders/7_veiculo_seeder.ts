import Veiculo from '#models/veiculo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Veiculo.createMany([
      {anoFabrica: 2020, anoModelo: 2020, cor: 'Branco', marcaId: 1, modeloId: 1, placa: 'JIP6541', quilometragem: '100000'},
      {anoFabrica: 2015, anoModelo: 2015, cor: 'Prata', marcaId: 2, modeloId: 2, placa: 'JJI1025', quilometragem: '150000'},
    ])
  }
}