import testRoutes from 'routes/test/test.routes';
import { Router } from 'express';

class MasterRouter {
  private _router = Router();
  private _testRoute = testRoutes;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/test', this._testRoute);
  }
}

export = new MasterRouter().router;
