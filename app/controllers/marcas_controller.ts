// import type { HttpContext } from '@adonisjs/core/http'

import Marca from "#models/marca";

export default class MarcasController {
  async index() {
    return await Marca.all()
  }
}