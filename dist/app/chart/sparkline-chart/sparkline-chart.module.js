import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartDefaults } from '../chart-defaults';
import { SparklineChartComponent } from './sparkline-chart.component';
import { SparklineChartConfig } from './sparkline-chart-config';
import { SparklineChartData } from './sparkline-chart-data';
import { WindowReference } from '../../utilities/window.reference';
export { SparklineChartConfig, SparklineChartData };
var SparklineChartModule = /** @class */ (function () {
    function SparklineChartModule() {
    }
    SparklineChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [SparklineChartComponent],
                    exports: [SparklineChartComponent],
                    providers: [ChartDefaults, WindowReference]
                },] },
    ];
    /** @nocollapse */
    SparklineChartModule.ctorParameters = function () { return []; };
    return SparklineChartModule;
}());
export { SparklineChartModule };
//# sourceMappingURL=sparkline-chart.module.js.map