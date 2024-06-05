import type { HttpContext } from '@adonisjs/core/http'

import Modelo from "#models/modelo";

export default class ModelosController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Modelo.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Modelo.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome','cambio','combustivel', 'motor'])
    return await Modelo.create(dados)
  }

  async update({params, request}: HttpContext){
    const modelo = await Modelo.findOrFail(params.id)
    const dados = request.only(['nome','cambio','combustivel', 'motor'])
    modelo.merge(dados)
    return await modelo.save()
  }

  async destroy({params}: HttpContext){
    const modelo = await Modelo.findOrFail(params.id)
      await modelo.delete()
      return {'modelo deletado:': modelo}

  }
}
