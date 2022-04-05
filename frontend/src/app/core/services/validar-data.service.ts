import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarDataService {

  constructor() { }

  validaData(data: any){
    var data = data
    data = data.replace(/\//g, "-");
    var data_array = data.split("-");


    if(data_array[0].length != 4){
       data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
    }

    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if(idade <= 0){
       return true;
    }
    return false;
 }

 validaDataEmprestimo(data: any){
  var data = data
  data = data.replace(/\//g, "-");
  var data_array = data.split("-");


  if(data_array[0].length != 4){
     data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
  }

  var hoje = new Date();
  var nasc  = new Date(data);
  var idade = hoje.getFullYear() - nasc.getFullYear();
  var m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  if(idade >= 0){
     return true;
  }
  return false;
}

dataAtual(){
  var data = new Date();
var dia = String(data. getDate()). padStart(2 ,'0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
return dataAtual
}
}
