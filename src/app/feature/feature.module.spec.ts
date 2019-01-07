import { FeatureModule } from './feature.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FeatureModule', () => {
  let featureModule: FeatureModule;

  beforeEach(() => {
    featureModule = new FeatureModule();
  });

  it('should create an instance', () => {
    expect(featureModule).toBeTruthy();
  });
});
