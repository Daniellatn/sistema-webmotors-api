import Pessoa from '#models/pessoa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    return await Pessoa.createMany([
      {nome: 'Maria', dataNascimento: DateTime.now(), sexo: 'F', celular: '61984563217', tipoId: 1},
      {nome: 'João', dataNascimento: DateTime.now(), sexo: 'M', celular: '61999654872', tipoId: 2}
    ])
  }
}