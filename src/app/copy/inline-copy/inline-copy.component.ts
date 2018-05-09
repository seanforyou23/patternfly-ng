import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-inline-copy',
  templateUrl: './inline-copy.component.html',
  styleUrls: ['./inline-copy.component.less']
})

export class InlineCopyComponent implements OnInit {

  /**
   * The default constructor
   */
  constructor() {}

  ngOnInit(): void {
    console.log('inline copy on init!');
  }
}