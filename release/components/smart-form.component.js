"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SmartFormComponent = /** @class */ (function () {
    function SmartFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.onSubmit = new core_1.EventEmitter();
        this.inputs = [];
        // XXX: add custom classes
        this.defaultSettings = {
            // XXX: should we have default values here?
            inputs: {},
            // XXX: add custom buttons
            buttons: {
                submit: {
                    value: 'Submit',
                },
            },
        };
    }
    SmartFormComponent.prototype.ngOnInit = function () {
        this.settings = this.extendObject(this.settings, this.defaultSettings);
        this.smartForm = this.formBuilder.group({});
        for (var name_1 in this.settings.inputs) {
            if (this.settings.inputs.hasOwnProperty(name_1)) {
                var input = this.settings.inputs[name_1];
                input.name = name_1;
                this.inputs.push(input);
                // XXX: allow default value (forms that edit an object)
                this.smartForm.addControl(input.name, new forms_1.FormControl());
            }
        }
    };
    SmartFormComponent.prototype.callOnSubmit = function () {
        this.onSubmit.emit(this.smartForm.value);
    };
    // XXX: this should be more advanced
    SmartFormComponent.prototype.extendObject = function (dest, source) {
        if (!dest.inputs) {
            dest.inputs = source.inputs;
        }
        // XXX: do we want to force input types?
        // else {
        //   for (const name in dest) {
        //     if (dest.hasOwnProperty(name)) {
        //       var element = dest[name];
        //       if (!element.type) {
        //         element.type = 'text';
        //       }
        //       if (!element.label) {
        //         element.label = name;
        //       }
        //     }
        //   }
        // }
        if (!dest.buttons) {
            dest.buttons = source.buttons;
        }
        return dest;
    };
    SmartFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-smart-form',
                    templateUrl: './smart-form.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    // encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./smart-form.component.css'],
                },] },
    ];
    /** @nocollapse */
    SmartFormComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder, },
    ]; };
    SmartFormComponent.propDecorators = {
        'settings': [{ type: core_1.Input },],
        'onSubmit': [{ type: core_1.Output },],
    };
    return SmartFormComponent;
}());
exports.SmartFormComponent = SmartFormComponent;
//# sourceMappingURL=smart-form.component.js.map