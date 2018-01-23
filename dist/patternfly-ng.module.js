var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionModule } from './src/app/action/action.module';
import { CardModule } from './src/app/card/card.module';
import { ChartModule } from './src/app/chart/chart.module';
import { EmptyStateModule } from './src/app/empty-state/empty-state.module';
import { FilterModule } from './src/app/filter/filter.module';
import { ListModule } from './src/app/list/list.module';
import { ModalModule } from './src/app/modal/modal.module';
import { NavigationModule } from './src/app/navigation/navigation.module';
import { NotificationModule } from './src/app/notification/notification.module';
import { PaginationModule } from './src/app/pagination/pagination.module';
import { PipeModule } from './src/app/pipe/pipe.module';
import { RemainingCharsCountModule } from './src/app/remaining-chars-count/remaining-chars-count.module';
import { SampleModule } from './src/app/sample/sample.module';
import { SortModule } from './src/app/sort/sort.module';
import { TableModule } from './src/app/table/table.module';
import { ToolbarModule } from './src/app/toolbar/toolbar.module';
import { WizardModule } from './src/app/wizard/wizard.module';
var PatternFlyNgModule = /** @class */ (function () {
    function PatternFlyNgModule() {
    }
    PatternFlyNgModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            exports: [
                ActionModule,
                CardModule,
                ChartModule,
                EmptyStateModule,
                FilterModule,
                ListModule,
                ModalModule,
                NavigationModule,
                NotificationModule,
                PaginationModule,
                RemainingCharsCountModule,
                PipeModule,
                SampleModule,
                SortModule,
                TableModule,
                ToolbarModule,
                WizardModule
            ]
        })
    ], PatternFlyNgModule);
    return PatternFlyNgModule;
}());
export { PatternFlyNgModule };
//# sourceMappingURL=patternfly-ng.module.js.map