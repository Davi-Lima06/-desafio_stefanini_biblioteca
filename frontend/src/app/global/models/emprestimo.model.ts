import Cliente from './cliente.model';
import Livro from './livro.model';

export default interface Emprestimo {
  id: number;
  cliente: Cliente | undefined;
  livro: Livro | undefined;
  dataInicio: string;
}
