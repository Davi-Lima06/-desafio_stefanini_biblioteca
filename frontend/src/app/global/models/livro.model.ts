import Autor from './autor.model';

export default interface Livro {
  nomeLivro: string;
  anoPublicacao: string;
  nomeEditora: string;
  ISBN: number;
  quantidade: number;
  autor: Autor | undefined;
}
