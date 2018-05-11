import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { CopyService } from '../copy-service/copy.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-inline-copy',
  templateUrl: './inline-copy.component.html',
  styleUrls: ['./inline-copy.component.less']
})

export class InlineCopyComponent implements OnInit {
  @Input('label') label: string;
  @Input('token') token: string;
  @Input('copyBtnTxt') copyBtnTxt: string = 'Copy';
  @Input('maxWidth') maxWidth: string;

  @Output('copiedToClipboard') copiedToClipboard = new EventEmitter();

  /**
   * The default constructor
   */
  constructor(private copyService: CopyService) {}

  ngOnInit(): void {
    if (!this.label) throw new Error('Missing required @Input property \'label\'');
  }

  /**
   * Copy token to the user's system clipboard
   */
  copyTokenToClipboard(): void {
    let result = this.copyService.copy(this.token);
    if (result) {
      this.copiedToClipboard.emit(`${this.label} copied!`);
    } else {
      console.error(`Failed to copy ${this.label}`);
    }
  }
}