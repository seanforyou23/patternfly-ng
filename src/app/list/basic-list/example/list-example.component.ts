import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'list-example',
  templateUrl: './list-example.component.html'
})
export class ListExampleComponent implements OnInit {
  activeTab: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  // Actions

  tabSelected($event: TabDirective): void {
    if ($event instanceof TabDirective) {
      this.activeTab = $event.heading;
    }
  }
}
