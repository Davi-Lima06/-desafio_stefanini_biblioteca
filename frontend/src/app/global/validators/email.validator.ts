import { AbstractControl } from "@angular/forms";

export function EmailValidator(control: AbstractControl){

  if(control.value.trim() && !/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\[a-z]+)?$/i.test(control.value)){
    return { emailValidator: true }
  }
  return null
}
