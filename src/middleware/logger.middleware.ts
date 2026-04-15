import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const metodo = req.method;
    const ruta = req.originalUrl;
    const inicio = Date.now();

    res.on('finish', () => {
      const tiempoRespuesta = Date.now() - inicio;
      const estado = res.statusCode;

      console.log(`[${metodo}] ${ruta} - ${estado} - ${tiempoRespuesta}ms`);
    });

    next();
  }
}