import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css'],
  animations: [
    trigger('slideInOut', [
      state('hidden', style({
        transform: 'translateY(100%)', // Pour masquer verticalement
        display: 'none'
      })),
      state('visible', style({
        transform: 'translateY(0) translateX(-50%)', // Pour centrer verticalement et légèrement vers la gauche
        left: '50%', // Ajustement supplémentaire pour centrer horizontalement
        display: 'block'
      })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out'))
    ])
  ]
})

export class SuccessPopupComponent {
  successMessage: string | null = null; // Message de succès reçu en entrée

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { successMessage: string | null },
    public dialogRef: MatDialogRef<SuccessPopupComponent>
  ) {
    this.successMessage = data.successMessage;
  }

  onClose() {
    this.dialogRef.close(); // Fermer la popup en utilisant le dialogRef
  }
}



