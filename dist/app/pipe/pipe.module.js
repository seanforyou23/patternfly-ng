import { NgModule } from '@angular/core';
import { SearchHighlightPipe } from './search-highlight/search-highlight.pipe';
import { SortArrayPipe } from './sort-array/sort-array.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
/**
 * A module containing objects associated with pipes
 */
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SearchHighlightPipe,
                        SortArrayPipe,
                        TruncatePipe
                    ],
                    exports: [
                        SearchHighlightPipe,
                        SortArrayPipe,
                        TruncatePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    PipeModule.ctorParameters = function () { return []; };
    return PipeModule;
}());
export { PipeModule };
//# sourceMappingURL=pipe.module.js.map