import type { HttpContext } from '@adonisjs/core/http'

import Veiculo from "#models/veiculo";

export default class VeiculosController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Veiculo.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Veiculo.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['anoFabrica','anoModelo', 'cor', 'marcaId', 'modeloId', 'placa', 'quilometragem'])
    return await Veiculo.create(dados)
  }

  async update({params, request}: HttpContext){
    const veiculo = await Veiculo.findOrFail(params.id)
    const dados = request.only(['anoFabrica','anoModelo', 'cor', 'marcaId', 'modeloId', 'placa', 'quilometragem'])
    veiculo.merge(dados)
    return await veiculo.save()
  }

  async destroy({params}: HttpContext){
    const veiculo = await Veiculo.findOrFail(params.id)
      await veiculo.delete()
      return {'veiculo deletado:': veiculo}

  }
}
