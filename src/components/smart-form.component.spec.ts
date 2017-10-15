import { TestBed, async } from '@angular/core/testing';
import { SmartFormComponent } from './smart-form.component';
import { NgxSmartFormModule } from '../ngx-smart-form.module';
describe('SmartForm component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSmartFormModule]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  // XXX: more tests
  describe('When settings are defined', () => {
    it('should transform settings to inputs', () => {
      const fixture = TestBed.createComponent(SmartFormComponent);
      const settings = {
        inputs: {
          field: {
            label: 'Field',
            type: 'text'
          }
        },
        buttons: {
          submit: {
            value: 'Send'
          }
        }
      };

      fixture.componentInstance.settings = settings;

      fixture.detectChanges();

      expect(fixture.componentInstance.inputs[0].name).toBe('field');
    });
  });

});
