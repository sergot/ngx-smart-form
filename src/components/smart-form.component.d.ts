import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SmartFormComponent implements OnInit {
    private formBuilder;
    settings: any;
    onSubmit: EventEmitter<any>;
    inputs: any[];
    smartForm: FormGroup;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    callOnSubmit(): void;
}
