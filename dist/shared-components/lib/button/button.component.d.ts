import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    label: string;
    color: string;
    textColor?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    onClick: EventEmitter<Event>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "danny-button", never, { "label": { "alias": "label"; "required": false; }; "color": { "alias": "color"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "border": { "alias": "border"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
