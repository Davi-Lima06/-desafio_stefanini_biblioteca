const BASE = 'http://localhost:8080/api';
const APIValidator = 'http://openlibrary.org/isbn'

const ApiUrl = {
  BASE,
  urlBaseCliente: BASE + '/cliente',
  urlBaseAutor: BASE + '/autor',
  urlBaseLivros: BASE + '/livro',
  urlBaseEmprestimos: BASE + '/emprestimos',
  APIurl: APIValidator
};

export default ApiUrl;
