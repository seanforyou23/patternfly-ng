import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockCopyComponent } from './block-copy/block-copy.component';
import { InlineCopyComponent } from './inline-copy/inline-copy.component';

export {
  BlockCopyComponent,
  InlineCopyComponent
};

@NgModule({
  imports: [CommonModule],
  declarations: [BlockCopyComponent, InlineCopyComponent],
  exports: [BlockCopyComponent, InlineCopyComponent]
})
export class CopyModule {}