// import type { HttpContext } from '@adonisjs/core/http'

import TipoCaracteristica from "#models/tipo_caracteristica";

export default class TipoCaracteristicasController {
  async index() {
    return await TipoCaracteristica.all()
  }
}