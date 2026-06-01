export default class ServicoDePagamento {
  #pagamentos;

  constructor() {
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const categoria = valor > 100.00 ? 'cara' : 'padrão';
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
      return null; // Retorna null se nenhum pagamento foi feito ainda
    }
    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}