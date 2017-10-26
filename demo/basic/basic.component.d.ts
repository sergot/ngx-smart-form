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
            email: {
                label: string;
                type: string;
            };
            licensePlate: {
                label: string;
                type: string;
            };
            desc: {
                label: string;
                type: string;
            };
        };
    };
    constructor();
    onSubmit(form: any): void;
}
