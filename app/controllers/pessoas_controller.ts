import type { HttpContext } from '@adonisjs/core/http'

import Pessoa from "#models/pessoa";

export default class PessoasController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Pessoa.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Pessoa.query()
      .where('id', params.id)
     // .preload('tipo_pessoa')
      .first()
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['nome', 'dataNascimento', 'sexo', 'celular', 'tipoId'])
    return await Pessoa.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    const dados = request.only(['nome', 'dataNascimento', 'sexo', 'celular', 'tipoId'])
    pessoa.merge(dados)
    return await pessoa.save()
  }

  async destroy({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.delete()
    return { 'pessoa deletado:': pessoa }

  }
}
