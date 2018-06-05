import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CardActionModule } from '../card-action/card-action.module';
import { CardComponent } from '../basic-card/card.component';
import { CardConfig } from '../basic-card/card-config';
import { CardFilterModule } from '../card-filter/card-filter.module';
export { CardConfig };
/**
 * A module containing objects associated with basic card components
 */
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CardActionModule,
                        CardFilterModule,
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [CardComponent],
                    exports: [CardComponent]
                },] },
    ];
    /** @nocollapse */
    CardModule.ctorParameters = function () { return []; };
    return CardModule;
}());
export { CardModule };
//# sourceMappingURL=card.module.js.map