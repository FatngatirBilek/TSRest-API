import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success Get Product Data')
  res.status(200).send({ status: true, statusCode: '200', data: [{ name: 'Sepatu Super', price: 500000 }] })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success Add New Product Data')
  res.status(200).send({ status: true, statusCode: '200', data: req.body })
})
