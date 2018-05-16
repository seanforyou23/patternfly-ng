import { EventEmitter, OnInit } from '@angular/core';
import { CopyService } from '../copy-service/copy.service';
export declare class BlockCopyComponent implements OnInit {
    private copyService;
    label: string;
    token: string;
    copyBtnTxt: string;
    tokenPanelOpen: boolean;
    copiedToClipboard: EventEmitter<{}>;
    /**
     * Used to uniquly relate label to copy button
     */
    hash: number;
    /**
     * The default constructor
     */
    constructor(copyService: CopyService);
    /**
     * Toggle copy token panel open and close
     */
    toggleTokenPanel(): void;
    /**
     * Copy token to the user's system clipboard
     */
    copyTokenToClipboard(): void;
    /**
     * Define format for expand button's aria label
     */
    expandBtnAriaLabel(componentLabel: string): string;
    /**
     * Define format for copy button's aria label
     */
    copyBtnAriaLabel(componentLabel: string): string;
    ngOnInit(): void;
}
