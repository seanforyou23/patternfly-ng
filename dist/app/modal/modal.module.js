import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutModalComponent } from './about-modal.component';
import { AboutModalConfig } from './about-modal-config';
export { AboutModalConfig };
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [AboutModalComponent],
                    exports: [AboutModalComponent]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=modal.module.js.map