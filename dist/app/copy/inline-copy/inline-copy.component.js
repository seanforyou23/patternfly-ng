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
var InlineCopyComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function InlineCopyComponent(copyService) {
        this.copyService = copyService;
        this.token = 'Missing \'token\' @Input property';
        this.copyBtnTxt = 'Copy';
        this.copiedToClipboard = new EventEmitter();
    }
    InlineCopyComponent.prototype.ngOnInit = function () {
        if (!this.label)
            throw new Error('Missing required @Input property \'label\'');
    };
    /**
     * Copy token to the user's system clipboard
     */
    InlineCopyComponent.prototype.copyTokenToClipboard = function () {
        var result = this.copyService.copy(this.token);
        if (result) {
            this.copiedToClipboard.emit(this.label + " copied!");
        }
        else {
            console.error("Failed to copy " + this.label);
        }
    };
    __decorate([
        Input('label'),
        __metadata("design:type", String)
    ], InlineCopyComponent.prototype, "label", void 0);
    __decorate([
        Input('token'),
        __metadata("design:type", String)
    ], InlineCopyComponent.prototype, "token", void 0);
    __decorate([
        Input('copyBtnTxt'),
        __metadata("design:type", String)
    ], InlineCopyComponent.prototype, "copyBtnTxt", void 0);
    __decorate([
        Output('copiedToClipboard'),
        __metadata("design:type", Object)
    ], InlineCopyComponent.prototype, "copiedToClipboard", void 0);
    InlineCopyComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'pfng-inline-copy',
            template: "<span class=\"inline-copy\"><span class=\"token-cont\" data-toggle=\"tooltip\" data-placement=\"top\" [tooltip]=\"label\">{{token}} </span><button class=\"copy-btn\" [attr.aria-label]=\"copyBtnTxt + ' ' + label\" (click)=\"copyTokenToClipboard()\"><i class=\"fa fa-copy\"></i></button></span>",
            styleUrls: ['./inline-copy.component.less']
        }),
        __metadata("design:paramtypes", [CopyService])
    ], InlineCopyComponent);
    return InlineCopyComponent;
}());
export { InlineCopyComponent };
//# sourceMappingURL=inline-copy.component.js.map