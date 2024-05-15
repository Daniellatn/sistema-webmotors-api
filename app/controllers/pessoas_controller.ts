// import type { HttpContext } from '@adonisjs/core/http'

import Pessoa from "#models/pessoa";

export default class PessoasController {
  async index() {
    return await Pessoa.all()
  }
}