import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appIdentityRevealedValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]
})
export class IdentityRevealedValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const name = control.get('name');
    const age = control.get('age');

    if(name?.value == age?.value) {
      name?.setErrors({ identityRevealed: true });
      age?.setErrors({ identityRevealed: true });

      return { identityRevealed: true };
    }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
}
