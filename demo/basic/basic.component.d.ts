export declare class BasicComponent {
    cars: any[];
    settings: {
        inputs: {
            ownerId: {
                label: string;
                type: string;
                config: {
                    select: {
                        options: {
                            value: string;
                            text: string;
                        }[];
                        multiple: boolean;
                    };
                };
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
