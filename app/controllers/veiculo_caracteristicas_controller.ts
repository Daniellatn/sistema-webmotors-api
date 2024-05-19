import type { HttpContext } from '@adonisjs/core/http'

import VeiculoCaracteristica from "#models/veiculo_caracteristica";

export default class VeiculoCaracteristicasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await VeiculoCaracteristica.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await VeiculoCaracteristica.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['caracteristicaId','veiculoId'])
    return await VeiculoCaracteristica.create(dados)
  }

  async update({params, request}: HttpContext){
    const veiculocaracteristica = await VeiculoCaracteristica.findOrFail(params.id)
    const dados = request.only(['caracteristicaId','veiculoId'])
    veiculocaracteristica.merge(dados)
    return await veiculocaracteristica.save()
  }

  async destroy({params}: HttpContext){
    const veiculocaracteristica = await VeiculoCaracteristica.findOrFail(params.id)
      await veiculocaracteristica.delete()
      return {'veiculocaracteristica deletado:': veiculocaracteristica}

  }
}
