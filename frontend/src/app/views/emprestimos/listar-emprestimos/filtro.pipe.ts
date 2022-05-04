import { Pipe, PipeTransform } from "@angular/core";
import Emprestimo from "src/app/global/models/emprestimo.model";

@Pipe({
  name: 'filterEmail',
})
export class FilterPorEmail implements PipeTransform {
  transform(emprestimo: Emprestimo[], nome: string) {
    nome = nome
      .trim()
      .toLowerCase();

      if(nome){
        return emprestimo.filter(emprestimo => emprestimo.cliente?.nome.toLowerCase().includes(nome))
      }else{
        return emprestimo;
      }
  }
}
