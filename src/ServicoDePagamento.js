export default class ServicoDePagamento {
  #pagamentos;

  constructor() {
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    let categoria;

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