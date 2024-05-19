import type { HttpContext } from '@adonisjs/core/http'

import TipoPessoa from "#models/tipo_pessoa";

export default class TipoPessoasController {
  async index({request}: HttpContext){
    const page = request.input('page',1)
    const perPage = request.input('perPage',10)
    return await TipoPessoa.query().paginate(page,perPage)
  }

  async show({params}: HttpContext){
    return await TipoPessoa.findOrFail(params.id)
  }

  async store({request}: HttpContext){
    const dados = request.only(['nome'])
    return await TipoPessoa.create(dados)
  }

  async update({params, request}: HttpContext){
    const tipopessoa = await TipoPessoa.findOrFail(params.id)
    const dados = request.only(['nome'])
    tipopessoa.merge(dados)
    return await tipopessoa.save()
  }

  async destroy({params}: HttpContext){
    const tipopessoa = await TipoPessoa.findOrFail(params.id)
      await tipopessoa.delete()
      return {'tipopessoa deletado:': tipopessoa}

  }

}
