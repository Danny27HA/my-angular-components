import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'danny-button',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Click me';
  @Input() color: string = '#007bff';
  @Input() textColor?: string;
  @Input() padding?: string;
  @Input() border?: string;
  @Input() borderRadius?: string;
  @Output() onClick = new EventEmitter<Event>();
}