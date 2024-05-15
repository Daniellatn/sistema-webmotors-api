// import type { HttpContext } from '@adonisjs/core/http'

import Imagem from "#models/imagem";

export default class ImagemsController {
  async index() {
    return await Imagem.all()
  }
}