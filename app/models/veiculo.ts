import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare anoFabrica: number

  @column()
  declare anoModelo: number

  @column()
  declare placa: string

  @column()
  declare cor: string

  @column()
  declare quilometragem: string

  @column()
  declare marcaId: number

  @column()
  declare modeloId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}