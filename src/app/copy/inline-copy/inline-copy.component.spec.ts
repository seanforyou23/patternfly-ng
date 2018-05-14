import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CopyService } from '../copy-service/copy.service';
import { InlineCopyComponent } from './inline-copy.component';
import { Component } from '@angular/core';

class MockedCopyService {
  copy() {
    return true;
  }
}

interface ComponentConfig {
  token: string,
  label: string,
  copyBtnTxt?: string
}

fdescribe('Inline Copy Component - ', () => {

  let inlineCopy: InlineCopyComponent;
  let fixture: ComponentFixture<InlineCopyComponent>;
  let componentConfig: ComponentConfig;
  let copyService: MockedCopyService;


  beforeEach(async(() => {
    copyService = new MockedCopyService();

    TestBed.configureTestingModule({
      declarations: [InlineCopyComponent],
      providers: [{ provide: CopyService, useValue: copyService }]
    })
    .compileComponents()
    .then(() => {
      componentConfig = {
        label: 'Foobar',
        token: 'Test Token'
      };
    })
    .then(() => {
      fixture = TestBed.createComponent(InlineCopyComponent);
      inlineCopy = fixture.componentInstance;
    });

  }));

  afterEach(() => {
    inlineCopy = null;
    fixture = null;
    copyService = null;
  });

  it('should have a valid fixture', () => {
    expect(fixture).toBeTruthy();
  });

  it('should test that inlineCopy is an instance of the inline copy component', () => {
    expect(inlineCopy instanceof InlineCopyComponent).toBeTruthy();
  });

  it('should find a single token container element', () => {
    let numTokenContainers = fixture.debugElement.queryAll(By.css('.token-cont')).length;
    expect(numTokenContainers).toBe(1);
  });

  it('should find a single copy button', () => {
    let numCopyBtns = fixture.debugElement.queryAll(By.css('.copy-btn')).length;
    expect(numCopyBtns).toBe(1);
  });

  it('should set the token container tooltip and text node', () => {
    (<any>Object).assign(inlineCopy, {label: 'Foobar', token: 'Test Token'});
    fixture.detectChanges();
    let tokenText = fixture.debugElement.children[0].nativeElement.innerText;
    let tooltipText = fixture.debugElement.children[0].children[0].attributes.tooltip;
    expect(tooltipText).toBe('Foobar');
    expect(tokenText).toContain('Test Token');
  });

  it('should set the copy button aria label', () => {
    (<any>Object).assign(inlineCopy, componentConfig);
    fixture.detectChanges();
    let ariaLabel = fixture.debugElement.children[0].children[1].attributes['aria-label'];
    expect(ariaLabel).toBe(`Copy ${componentConfig.label}`);
  });

  it('should incorporate button txt into its aria-label', () => {
    let btnTxt = 'Grab';
    (<any>Object).assign(inlineCopy, componentConfig, {copyBtnTxt: btnTxt});
    fixture.detectChanges();
    let ariaLabel = fixture.debugElement.children[0].children[1].attributes['aria-label'];
    expect(ariaLabel).toBe(`${btnTxt} ${inlineCopy.label}`);
  });

  it('should throw error without a label', () => {
    (<any>Object).assign({label: null}, inlineCopy, componentConfig);
    expect(() => {
      fixture.detectChanges();
    }).toThrow(new Error('Missing required @Input property \'label\''));
  });

  it('should emit a copiedToClipboard event', () => {
    spyOn(inlineCopy, 'copiedToClipboard');
    let copyBtn = fixture.nativeElement.querySelector('.copy-btn');
    copyBtn.click();
    fixture.whenStable().then(() => {
      expect(inlineCopy.copiedToClipboard).toHaveBeenCalled();
    })
  });

});
