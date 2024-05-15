// import type { HttpContext } from '@adonisjs/core/http'

import Caracteristica from "#models/caracteristica";

export default class CaracteristicasController {
  async index() {
    return await Caracteristica.all()
  }
}