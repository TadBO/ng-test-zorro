import { BaseModule } from './base.module';

describe('BaseModule', () => {
  let baseModule: BaseModule;

  beforeEach(() => {
    baseModule = new BaseModule();
  });

  it('should create an instance', () => {
    expect(baseModule).toBeTruthy();
  });
});
