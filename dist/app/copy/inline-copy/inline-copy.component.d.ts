import { EventEmitter, OnInit } from '@angular/core';
import { CopyService } from '../copy-service/copy.service';
export declare class InlineCopyComponent implements OnInit {
    private copyService;
    label: string;
    token: string;
    copyBtnTxt: string;
    copiedToClipboard: EventEmitter<{}>;
    /**
     * The default constructor
     */
    constructor(copyService: CopyService);
    ngOnInit(): void;
    /**
     * Copy token to the user's system clipboard
     */
    copyTokenToClipboard(): void;
}
