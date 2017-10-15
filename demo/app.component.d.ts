import { Location } from '@angular/common';
export declare class AppComponent {
    cars: any[];
    settings: {
        inputs: {
            client: {
                label: string;
                type: string;
            };
            licensePlate: {
                label: string;
                type: string;
            };
        };
        buttons: {
            submit: {
                value: string;
            };
        };
    };
    state: any;
    version: string;
    constructor(location: Location);
    onSubmit(form: any): void;
}
