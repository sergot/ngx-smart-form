import { NgxSmartFormConfig } from './ngx-smart-form-config';

export interface NgxSmartFormInput {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  config?: NgxSmartFormConfig;
}
