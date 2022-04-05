import Autor from './autor.model';

export default interface Livro {
  nomeLivro: string;
  anoPublicacao: string;
  nomeEditora: string;
  ISBN: number | string;
  quantidade: number | string;
  autor: Autor | undefined;
}
