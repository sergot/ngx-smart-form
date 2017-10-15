"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
require("rxjs/add/observable/fromEvent");
var components_1 = require("./components");
var NgxSmartFormModule = /** @class */ (function () {
    function NgxSmartFormModule() {
    }
    NgxSmartFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule
                    ],
                    providers: [],
                    declarations: [
                        components_1.SmartFormComponent
                    ],
                    exports: [
                        components_1.SmartFormComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxSmartFormModule.ctorParameters = function () { return []; };
    return NgxSmartFormModule;
}());
exports.NgxSmartFormModule = NgxSmartFormModule;
//# sourceMappingURL=ngx-smart-form.module.js.map