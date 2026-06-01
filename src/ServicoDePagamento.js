export default class ServicoDePagamento {
  #pagamentos;

  constructor() {
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    // Criamos a variável que vai armazenar a categoria
    let categoria;

    // Substituição do operador ternário pelo if...else tradicional
    if (valor > 100.00) {
      categoria = 'cara';
    } else {
      categoria = 'padrão';
    }

    const novoPagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    };

    this.#pagamentos.push(novoPagamento);
    return novoPagamento;
  }

  consultarUltimoPagamento() {
    if (this.#pagamentos.length === 0) {
      return null;
    }
    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}