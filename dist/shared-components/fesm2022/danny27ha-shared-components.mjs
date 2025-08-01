import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

class SharedComponentsService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SharedComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SharedComponentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SharedComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SharedComponentsComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SharedComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: SharedComponentsComponent, isStandalone: true, selector: "lib-shared-components", ngImport: i0, template: `
    <p>
      shared-components works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SharedComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-components', imports: [], template: `
    <p>
      shared-components works!
    </p>
  ` }]
        }] });

class ButtonComponent {
    label = 'Click me';
    color = '#007bff';
    textColor;
    padding;
    border;
    borderRadius;
    onClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: ButtonComponent, isStandalone: true, selector: "danny-button", inputs: { label: "label", color: "color", textColor: "textColor", padding: "padding", border: "border", borderRadius: "borderRadius" }, outputs: { onClick: "onClick" }, ngImport: i0, template: `
    <button 
      (click)="onClick.emit($event)"
      [style.background]="color"
      [style.color]="textColor || 'white'"
      [style.padding]="padding || '8px 16px'"
      [style.border]="border || 'none'"
      [style.border-radius]="borderRadius || '4px'"
      [style.cursor]="'pointer'"
    >
      {{ label }}
    </button>
  `, isInline: true, styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'danny-button', standalone: true, imports: [CommonModule], template: `
    <button 
      (click)="onClick.emit($event)"
      [style.background]="color"
      [style.color]="textColor || 'white'"
      [style.padding]="padding || '8px 16px'"
      [style.border]="border || 'none'"
      [style.border-radius]="borderRadius || '4px'"
      [style.cursor]="'pointer'"
    >
      {{ label }}
    </button>
  ` }]
        }], propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], padding: [{
                type: Input
            }], border: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

/*
 * Public API Surface of shared-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, SharedComponentsComponent, SharedComponentsService };
//# sourceMappingURL=danny27ha-shared-components.mjs.map
