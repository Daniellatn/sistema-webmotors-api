// import type { HttpContext } from '@adonisjs/core/http'

import VeiculoCaracteristica from "#models/veiculo_caracteristica";

export default class VeiculoCaracteristicasController {
  async index() {
    return await VeiculoCaracteristica.all()
  }
}