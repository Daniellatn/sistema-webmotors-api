import Imagem from '#models/imagem'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Imagem.createMany([
      {nome: 'Carro Gol', imagem: 'Teste', tipo: 'jpg', veiculoId: 1},
      {nome: 'Carro Celta', imagem: 'Teste 2', tipo: 'jpg', veiculoId: 2}
    ])
  }
}