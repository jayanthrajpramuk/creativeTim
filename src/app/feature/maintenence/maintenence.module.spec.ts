import { MaintenenceModule } from './maintenence.module';

describe('MaintenenceModule', () => {
  let maintenenceModule: MaintenenceModule;

  beforeEach(() => {
    maintenenceModule = new MaintenenceModule();
  });

  it('should create an instance', () => {
    expect(maintenenceModule).toBeTruthy();
  });
});
