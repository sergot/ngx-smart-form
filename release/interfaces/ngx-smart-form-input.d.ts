import { NgxSmartFormSelectData } from './ngx-smart-form-select-data';
export interface NgxSmartFormInput {
    name: string;
    type: string;
    placeholder?: string;
    data?: NgxSmartFormSelectData[];
}
