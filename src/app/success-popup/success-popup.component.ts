import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css'],
  animations: [
    trigger('slideInOut', [
      state('hidden', style({
        transform: 'translateY(100%)',
        display: 'none'
      })),
      state('visible', style({
        transform: 'translateY(0)',
        display: 'block'
      })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out'))
    ])
  ]
})
export class SuccessPopupComponent {
  @Input() successMessage: string | null = null; // Message de succès reçu en entrée
  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit(); // Émettre l'événement de fermeture du pop-up
  }
}


