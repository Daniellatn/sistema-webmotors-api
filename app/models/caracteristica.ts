import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import TipoCaracteristica from './tipo_caracteristica.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import VeiculoCaracteristica from './veiculo_caracteristica.js'

export default class Caracteristica extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare tipoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>VeiculoCaracteristica)
  declare veiculos_caracteristica: HasMany<typeof VeiculoCaracteristica>

  @belongsTo(()=>TipoCaracteristica,{
    foreignKey:'tipoId'
  })
  declare tipo: BelongsTo<typeof TipoCaracteristica>
}
