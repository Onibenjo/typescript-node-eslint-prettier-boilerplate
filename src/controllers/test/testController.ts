import ErrorHandler from '@models/ErrorHandler';

class TestController {
  defaultMethod() {
    return {
      text: 'Testing testing testing',
    };
  }
  throwError() {
    throw new ErrorHandler(501, 'Not implemented method');
  }
}

export = new TestController();
