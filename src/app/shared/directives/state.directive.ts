import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() public appState!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {}

  ngOnChanges() {
    // console.log(this.appState.toLowerCase());
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
