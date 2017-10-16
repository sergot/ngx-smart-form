export declare class BasicComponent {
    cars: any[];
    settings: {
        inputs: {
            ownerId: {
                label: string;
                type: string;
                data: {
                    value: string;
                    text: string;
                }[];
            };
            licensePlate: {
                label: string;
                type: string;
            };
        };
    };
    constructor();
    onSubmit(form: any): void;
}
