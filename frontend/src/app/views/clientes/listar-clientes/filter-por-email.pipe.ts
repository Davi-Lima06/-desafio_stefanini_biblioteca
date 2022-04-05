import  Cliente  from 'src/app/global/models/cliente.model';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'filterEmail',
})
export class FilterPorEmail implements PipeTransform {
  transform(cliente: Cliente[], email: string) {
    email = email
      .trim()
      .toLowerCase();

      if(email){
        return cliente.filter(cliente => cliente.email.toLowerCase().includes(email))
      }else{
        return cliente;
      }
  }
}
