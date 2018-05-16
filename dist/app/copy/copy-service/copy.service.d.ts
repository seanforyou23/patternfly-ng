export declare class CopyService {
    dom: Document;
    constructor(dom: Document);
    /**
     * Copy token to the user's system clipboard
     */
    copy(value: string): boolean;
    private handleError(error);
}
