import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'

export default class TipoPessoa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Pessoa)
  declare pessoas: HasMany<typeof Pessoa>
}
