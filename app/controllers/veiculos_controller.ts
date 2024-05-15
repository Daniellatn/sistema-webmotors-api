// import type { HttpContext } from '@adonisjs/core/http'

import Veiculo from "#models/veiculo";

export default class VeiculosController {
  async index() {
    return await Veiculo.all()
  }
}