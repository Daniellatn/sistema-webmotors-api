import type { HttpContext } from '@adonisjs/core/http'

import TipoCaracteristica from "#models/tipo_caracteristica";

export default class TipoCaracteristicasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await TipoCaracteristica.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await TipoCaracteristica.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome'])
    return await TipoCaracteristica.create(dados)
  }

  async update({params, request}: HttpContext){
    const tipocaracteristica = await TipoCaracteristica.findOrFail(params.id)
    const dados = request.only(['nome'])
    tipocaracteristica.merge(dados)
    return await tipocaracteristica.save()
  }

  async destroy({params}: HttpContext){
    const tipocaracteristica = await TipoCaracteristica.findOrFail(params.id)
      await tipocaracteristica.delete()
      return {'tipocaracteristica deletado:': tipocaracteristica}

  }
}
