// import type { HttpContext } from '@adonisjs/core/http'

import TipoPessoa from "#models/tipo_pessoa";

export default class TipoPessoasController {
  async index() {
    return await TipoPessoa.all()
  }
}