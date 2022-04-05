import { AbstractControl } from "@angular/forms";

export function TelefoneValidator(control: AbstractControl){

  if(control.value.trim() && !/^\([1-9]{2}\) ([1-9])[0-9]{2}\-[0-9]{3}\-[0-9]{3}$/.test(control.value)){
    return { validarTelefone: true }
  }
  return null
}
