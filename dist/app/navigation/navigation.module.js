import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavigationItemConfig } from './navigation-item-config';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';
import { WindowReference } from '../utilities/window.reference';
import { ApplicationLauncherComponent } from './application-launcher/application-launcher.component';
export { NavigationItemConfig };
/**
 * A module containing objects associated with the navigation components
 */
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BsDropdownModule.forRoot(),
                        CommonModule,
                        TooltipModule.forRoot()
                    ],
                    declarations: [ApplicationLauncherComponent, VerticalNavigationComponent],
                    exports: [ApplicationLauncherComponent, VerticalNavigationComponent],
                    providers: [BsDropdownConfig, TooltipConfig, WindowReference]
                },] },
    ];
    /** @nocollapse */
    NavigationModule.ctorParameters = function () { return []; };
    return NavigationModule;
}());
export { NavigationModule };
//# sourceMappingURL=navigation.module.js.map