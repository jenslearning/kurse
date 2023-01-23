import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbiddenValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}
  ]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenValidator')
  forbiddenName = '';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const isInvalid = control.value.toUpperCase().includes(this.forbiddenName.toUpperCase());

    if(isInvalid) {
      return { forbiddenName: this.forbiddenName };
    }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
}
