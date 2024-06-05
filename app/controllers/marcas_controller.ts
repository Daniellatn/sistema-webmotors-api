import type { HttpContext } from '@adonisjs/core/http'

import Marca from "#models/marca";

export default class MarcasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Marca.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Marca.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome','sigla'])
    return await Marca.create(dados)
  }

  async update({params, request}: HttpContext){
    const marca = await Marca.findOrFail(params.id)
    const dados = request.only(['nome','sigla'])
    marca.merge(dados)
    return await marca.save()
  }

  async destroy({params}: HttpContext){
    const marca = await Marca.findOrFail(params.id)
      await marca.delete()
      return {'marca deletado:': marca}

  }


}
