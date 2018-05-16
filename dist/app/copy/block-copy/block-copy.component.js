var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CopyService } from '../copy-service/copy.service';
var BlockCopyComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function BlockCopyComponent(copyService) {
        this.copyService = copyService;
        this.token = 'Missing \'token\' @Input property';
        this.copyBtnTxt = 'Copy';
        this.tokenPanelOpen = false;
        this.copiedToClipboard = new EventEmitter();
        /**
         * Used to uniquly relate label to copy button
         */
        this.hash = Math.floor(Math.random() * 10000);
    }
    /**
     * Toggle copy token panel open and close
     */
    BlockCopyComponent.prototype.toggleTokenPanel = function () {
        this.tokenPanelOpen = !this.tokenPanelOpen;
    };
    /**
     * Copy token to the user's system clipboard
     */
    BlockCopyComponent.prototype.copyTokenToClipboard = function () {
        var result = this.copyService.copy(this.token);
        if (result) {
            this.copiedToClipboard.emit(this.label + " copied!");
        }
        else {
            console.error("Failed to copy " + this.label);
        }
    };
    /**
     * Define format for expand button's aria label
     */
    BlockCopyComponent.prototype.expandBtnAriaLabel = function (componentLabel) {
        return "Expand " + componentLabel + " Container";
    };
    /**
     * Define format for copy button's aria label
     */
    BlockCopyComponent.prototype.copyBtnAriaLabel = function (componentLabel) {
        return "Copy " + componentLabel;
    };
    BlockCopyComponent.prototype.ngOnInit = function () {
        if (!this.label)
            throw new Error('Missing required @Input property \'label\'');
    };
    __decorate([
        Input('label'),
        __metadata("design:type", String)
    ], BlockCopyComponent.prototype, "label", void 0);
    __decorate([
        Input('token'),
        __metadata("design:type", String)
    ], BlockCopyComponent.prototype, "token", void 0);
    __decorate([
        Input('copyBtnTxt'),
        __metadata("design:type", String)
    ], BlockCopyComponent.prototype, "copyBtnTxt", void 0);
    __decorate([
        Input('tokenPanelOpen'),
        __metadata("design:type", Boolean)
    ], BlockCopyComponent.prototype, "tokenPanelOpen", void 0);
    __decorate([
        Output('copiedToClipboard'),
        __metadata("design:type", Object)
    ], BlockCopyComponent.prototype, "copiedToClipboard", void 0);
    BlockCopyComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'pfng-block-copy',
            template: "<div><label [attr.for]=\"'pf-copy-token-button-' + hash\">{{label}}</label><div class=\"copy\"><div class=\"copy-preview\" [ngClass]=\"{'pf-is-open': tokenPanelOpen}\"><button [attr.aria-label]=\"expandBtnAriaLabel(label)\" [attr.aria-expanded]=\"tokenPanelOpen\" class=\"copy-preview-btn\" (click)=\"toggleTokenPanel()\"><i class=\"fa copy-preview-icon\" [ngClass]=\"{'fa-angle-down': tokenPanelOpen, 'fa-angle-right': !tokenPanelOpen}\"></i></button><div class=\"copy-preview-txt-cont\"><span data-toggle=\"tooltip\" data-placement=\"top\" [tooltip]=\"label\">{{token}}</span></div><button [attr.id]=\"'pf-copy-token-button-' + hash\" class=\"btn btn-lg btn-default copy-btn\" [attr.aria-label]=\"copyBtnAriaLabel(label)\" (click)=\"copyTokenToClipboard()\">{{copyBtnTxt}}</button></div><div class=\"copy-body\" *ngIf=\"tokenPanelOpen\"><span>{{token}}</span></div></div></div>",
            styleUrls: ['./block-copy.component.less']
        }),
        __metadata("design:paramtypes", [CopyService])
    ], BlockCopyComponent);
    return BlockCopyComponent;
}());
export { BlockCopyComponent };
//# sourceMappingURL=block-copy.component.js.map