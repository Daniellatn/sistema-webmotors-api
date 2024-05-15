// import type { HttpContext } from '@adonisjs/core/http'

import Modelo from "#models/modelo";

export default class ModelosController {
  async index() {
    return await Modelo.all()
  }
}