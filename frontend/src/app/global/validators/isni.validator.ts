import { AbstractControl } from "@angular/forms";

export function INSIValidator(control: AbstractControl){

  if(control.value.trim() && !/^[1-9]\d*$/.test(control.value)){
    return { insiValidator: true }
  }
  return null
}
