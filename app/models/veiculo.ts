import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Modelo from './modelo.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Marca from './marca.js'
import Imagem from './imagem.js'
import VeiculoCaracteristica from './veiculo_caracteristica.js'

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

  @hasMany(()=>VeiculoCaracteristica)
  declare veiculos_caracteristica: HasMany<typeof VeiculoCaracteristica>

  @hasMany(()=>Imagem)
  declare imagem: HasMany<typeof Imagem>

  @belongsTo(()=>Modelo,{
    foreignKey:'modeloId'
  })
  declare modelo: BelongsTo<typeof Modelo>

  @belongsTo(()=>Marca,{
    foreignKey:'marcaId'
  })
  declare marca: BelongsTo<typeof Marca>
}
