import Result, { ok } from 'true-myth/result';

export default class Test {
  async test(): Promise<Result<string, string>> {
    return ok('test');
  }
}
