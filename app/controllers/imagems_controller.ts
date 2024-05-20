import type { HttpContext } from '@adonisjs/core/http'

import Imagem from "#models/imagem";

export default class ImagemsController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Imagem.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await Imagem.query().where('id', params.id)
    .preload('veiculo')
    .firstOrFail()
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome', 'imagem', 'tipo', 'veiculoId'])
    return await Imagem.create(dados)
  }

  async update({params, request}: HttpContext){
    const imagem = await Imagem.findOrFail(params.id)
    const dados = request.only(['nome', 'imagem', 'tipo', 'veiculoId'])
    imagem.merge(dados)
    return await imagem.save()
  }

  async destroy({params}: HttpContext){
    const imagem = await Imagem.findOrFail(params.id)
      await imagem.delete()
      return {'imagem deletado:': imagem}

  }
}
