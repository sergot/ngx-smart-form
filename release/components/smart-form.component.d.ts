import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSmartFormSettings, NgxSmartFormInput } from '../interfaces';
export declare class SmartFormComponent implements OnInit {
    private formBuilder;
    settings: NgxSmartFormSettings;
    onSubmit: EventEmitter<any>;
    inputs: NgxSmartFormInput[];
    smartForm: FormGroup;
    defaultSettings: NgxSmartFormSettings;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    callOnSubmit(): void;
    private extendObject(dest, source);
}
