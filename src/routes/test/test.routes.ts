import testController from '@controllers/test/testController';
import { NextFunction, Request, Response, Router } from 'express';

class TestRouter {
  private _router = Router();
  private _controller = testController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        return res.status(200).json(this._controller.defaultMethod());
      } catch (error) {
        next(error);
      }
    });
    this._router.get('/hi', (_, res: Response) => {
      return res.status(200).json({ hello: 'hi' });
    });
    this._router.get('/error', (_, res: Response, next: NextFunction) => {
      try {
        const result = this._controller.throwError();
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new TestRouter().router;
