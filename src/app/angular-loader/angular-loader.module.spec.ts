import { AngularLoaderModule } from './angular-loader.module';

describe('AngularLoaderModule', () => {
  let angularLoaderModule: AngularLoaderModule;

  beforeEach(() => {
    angularLoaderModule = new AngularLoaderModule();
  });

  it('should create an instance', () => {
    expect(angularLoaderModule).toBeTruthy();
  });
});
