import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SmartFormComponent } from './smart-form.component';
import { NgxSmartFormModule } from '../ngx-smart-form.module';

let comp: SmartFormComponent;
let fixture: ComponentFixture<SmartFormComponent>;
let page: Page;

class Page {
  submitBtn: DebugElement;
  inputs: DebugElement[];
  labels: DebugElement[];

  constructor() { }

  addPageElements() {
    if (comp.settings) {
      this.submitBtn = fixture.debugElement.query(By.css('button'));
      this.inputs = fixture.debugElement.queryAll(By.css('input'));
      this.labels = fixture.debugElement.queryAll(By.css('label'));
    }
  }
}

function createComponent(settings) {
  fixture = TestBed.createComponent(SmartFormComponent);
  comp = fixture.componentInstance;
  page = new Page();

  comp.settings = settings;

  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page.addPageElements();
  });
}

describe('SmartForm component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSmartFormModule, FormsModule, ReactiveFormsModule],
      declarations: [],
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  // XXX: more tests
  describe('When full settings are defined', () => {
    beforeEach(async(() => {
      const settings = {
        inputs: {
          field: {
            label: 'Field',
            type: 'text',
          },
        },

        buttons: {
          submit: {
            value: 'Save',
          },
        },
      };

      createComponent(settings);
    }));

    it('should transform settings.inputs object into inputs array', () => {
      fixture.detectChanges();

      expect(comp.inputs.length).toBe(1);
      expect(comp.inputs[0].name).toBe('field');
      expect(comp.inputs[0].label).toBe('Field');
      expect(comp.inputs[0].type).toBe('text');
    });

    it('should have submit name different than default', () => {
      expect(page.submitBtn.nativeElement.innerText).toBe('Save');
    });

    it('should generate form with inputs and labels', () => {
      const howMany = Object.keys(comp.settings.inputs).length;

      expect(page.labels.length).toBe(howMany);
      expect(page.inputs.length).toBe(howMany);
    });

    it('should emit even on submit', () => {
      spyOn(comp.onSubmit, 'emit');
      const value = 'John Lemon';

      comp.smartForm.controls['field'].setValue(value);
      fixture.detectChanges();
      page.submitBtn.nativeElement.click();

      expect(comp.onSubmit.emit).toHaveBeenCalledWith({ field: value });
    });
  });

  describe('When full settings are defined', () => {
    beforeEach(async(() => {
      const settings = {};

      createComponent(settings);
    }));

    it('should use default settings', () => {
      expect(Object.keys(comp.settings.inputs).length).toBe(0);
      expect(comp.inputs.length).toBe(0);
      expect(comp.settings.buttons['submit'].value).toBe('Submit');
    });
  });

});
