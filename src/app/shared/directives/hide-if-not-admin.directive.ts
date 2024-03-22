import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHideIfNotAdmin]'
})
export class HideIfNotAdminDirective implements OnInit{

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template)

      this.viewContainerRef.clear()


}
}
