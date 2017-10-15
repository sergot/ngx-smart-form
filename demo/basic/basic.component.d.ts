export declare class BasicComponent {
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
    constructor();
    onSubmit(form: any): void;
}
