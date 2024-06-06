import type { HttpContext } from '@adonisjs/core/http'

import Imagem from "#models/imagem";
import app from '@adonisjs/core/services/app';
import { normalize } from 'path';

export default class ImagemsController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await Imagem.query().paginate(page,perPage)
  }

  // async show({params}: HttpContext){
  //   return await Imagem.query().where('id', params.id)
  //   .preload('veiculo')
  //   .firstOrFail()
  // }

  // async store({request}: HttpContext){
  //   const dados = request.only(['nome', 'imagem', 'tipo', 'veiculoId'])
  //   return await Imagem.create(dados)
  // }

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

  //Upload
  async store({request, response}: HttpContext) {
    const img = request.file('  ', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg']
    })

    if (!img?.isValid) {
      return response.badRequest({
        errors: img?.errors
      })
    }
    const nome = img.clientName.split('.')[0];
    await img.move(app.makePath('uploads'), {
      name: `${nome}.${img.extname}`
    })
    const data = {
      nome: nome,
      tipo: img.extname,
      imagem: img.clientName
    }
    return await Imagem.create(data)
  }
  // Download
  async show({params, response}: HttpContext) {

    const dados = await Imagem.findOrFail(params.id)
    const nomeImagem = normalize(dados.imagem)

    const caminhoImagem = app.makePath('uploads', nomeImagem)

    return response.download(caminhoImagem)
  }
}
