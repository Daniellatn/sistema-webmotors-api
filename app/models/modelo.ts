import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Veiculo from './veiculo.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Modelo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare motor: string

  @column()
  declare cambio: string

  @column()
  declare combustivel: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Veiculo)
  declare veiculos: HasMany<typeof Veiculo>
}
