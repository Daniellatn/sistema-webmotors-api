import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import TipoPessoa from './tipo_pessoa.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column.dateTime()
  declare dataNascimento: DateTime

  @column()
  declare sexo: string

  @column()
  declare celular: string

  @column()
  declare tipoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>TipoPessoa,{
    foreignKey:'tipoId'
  })
  declare tipo_pessoa: BelongsTo<typeof TipoPessoa>
}
