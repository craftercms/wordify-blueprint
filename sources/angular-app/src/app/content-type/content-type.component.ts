import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { RichTextComponent } from '../rich-text/rich-text.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ResponsiveColumnsComponent } from '../responsive-columns/responsive-columns.component';

const contentTypeMap = {
  '/component/rich_text': RichTextComponent,
  '/component/image': ImageComponent,
  '/component/responsive_columns': ResponsiveColumnsComponent
}

@Component({
  selector: 'app-content-type',
  template: `<div></div>`,
  styleUrls: ['./content-type.component.scss']
})
export class ContentTypeComponent implements OnInit {
  @Input() model;
  public component;

  constructor(public viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.component = this.model === null
      ? NotFoundComponent
      : (contentTypeMap[this.model.craftercms.contentTypeId] || NotFoundComponent);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.viewContainerRef.clear();

    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // @ts-ignore
    componentRef.instance.model = this.model;
  }
}
