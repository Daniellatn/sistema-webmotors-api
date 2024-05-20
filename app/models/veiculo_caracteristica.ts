import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Veiculo from './veiculo.js'
import Caracteristica from './caracteristica.js'

export default class VeiculoCaracteristica extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare veiculoId: number

  @column()
  declare caracteristicaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Veiculo,{
    foreignKey:'veiculoId'
  })
  declare veiculo: BelongsTo<typeof Veiculo>

  @belongsTo(()=>Caracteristica,{
    foreignKey:'caracteristicaId'
  })
  declare caracteristica: BelongsTo<typeof Caracteristica>
}
