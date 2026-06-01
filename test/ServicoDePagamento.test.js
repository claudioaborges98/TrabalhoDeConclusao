import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Testes da classe ServicoDePagamento', () => {

  it('Deve classificar o pagamento como "cara" se o valor for maior que 100', () => {
    const servico = new ServicoDePagamento();
    const codigo = '0987-7656-3475';
    const empresa = 'Samar';
    const valor = 156.87;

    servico.pagar(codigo, empresa, valor);
    const resultado = servico.consultarUltimoPagamento();

    assert.strictEqual(resultado.categoria, 'cara');
    assert.strictEqual(resultado.valor, 156.87);
    assert.strictEqual(resultado.empresa, 'Samar');
  });

  it('Deve classificar o pagamento como "padrão" se o valor for menor ou igual a 100', () => {

    const servico = new ServicoDePagamento();
    const codigo = '1111-2222-3333';
    const empresa = 'Mercadinho';
    const valor = 50.00;

    servico.pagar(codigo, empresa, valor);
    const resultado = servico.consultarUltimoPagamento();

    assert.strictEqual(resultado.categoria, 'padrão');
    assert.strictEqual(resultado.valor, 50.00);
  });

  it('Deve retornar apenas o ÚLTIMO pagamento realizado', () => {
    const servico = new ServicoDePagamento();
    
    servico.pagar('111', 'Empresa A', 45.00);
    servico.pagar('222', 'Empresa B', 200.00); // Este é o último
    
    const resultado = servico.consultarUltimoPagamento();

    assert.strictEqual(resultado.empresa, 'Empresa B');
    assert.strictEqual(resultado.categoria, 'cara');
  });
});