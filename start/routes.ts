/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CaracteristicasController from '#controllers/caracteristicas_controller'
import ImagemsController from '#controllers/imagems_controller'
import MarcasController from '#controllers/marcas_controller'
import ModelosController from '#controllers/modelos_controller'
import PessoasController from '#controllers/pessoas_controller'
import TipoCaracteristicasController from '#controllers/tipo_caracteristicas_controller'
import TipoPessoasController from '#controllers/tipo_pessoas_controller'
import VeiculoCaracteristicasController from '#controllers/veiculo_caracteristicas_controller'
import VeiculosController from '#controllers/veiculos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/tipo-pessoas', TipoPessoasController).apiOnly()
router.resource('/pessoas', PessoasController).apiOnly()
router.resource('/marcas', MarcasController).apiOnly()
router.resource('/modelos', ModelosController).apiOnly()
router.resource('/tipo-caracteristicas', TipoCaracteristicasController).apiOnly()
router.resource('/caracteristicas', CaracteristicasController).apiOnly()
router.resource('/veiculos', VeiculosController).apiOnly()
router.resource('/imagens', ImagemsController).apiOnly()
router.resource('/veiculo-caracteristicas', VeiculoCaracteristicasController).apiOnly()
