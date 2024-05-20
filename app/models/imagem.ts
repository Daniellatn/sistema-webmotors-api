import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Veiculo from './veiculo.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Imagem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare tipo: string

  @column()
  declare imagem: string

  @column()
  declare veiculoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Veiculo,{
    foreignKey:'veiculoId'
  })
  declare veiculo: BelongsTo<typeof Veiculo>
}
