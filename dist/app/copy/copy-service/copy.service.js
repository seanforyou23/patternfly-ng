var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
var CopyService = /** @class */ (function () {
    function CopyService(dom) {
        this.dom = dom;
    }
    /**
     * Copy token to the user's system clipboard
     */
    CopyService.prototype.copy = function (value) {
        var result = false;
        var textarea = this.dom.createElement('textarea');
        textarea.style.width = '0px';
        textarea.style.height = '0px';
        textarea.style.position = 'fixed';
        textarea.style.top = '-100px';
        textarea.style.left = '-100px';
        textarea.style.opacity = '0';
        textarea.value = value;
        this.dom.body.appendChild(textarea);
        textarea.select();
        try {
            result = this.dom.execCommand('copy');
        }
        catch (error) {
            this.handleError(error);
        }
        finally {
            if (textarea.parentNode !== undefined) {
                textarea.parentNode.removeChild(textarea);
            }
        }
        return result;
    };
    CopyService.prototype.handleError = function (error) {
        console.error(error);
    };
    CopyService = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], CopyService);
    return CopyService;
}());
export { CopyService };
//# sourceMappingURL=copy.service.js.map