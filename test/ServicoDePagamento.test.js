import  ServicoDePagamento  from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Testes da classe ServicoDePagamento (ESM)', () => {

  it('Deve classificar o pagamento como "cara" se o valor for maior que 100', () => {
    const servico = new ServicoDePagamento();
    const codigo = '0987-7656-3475';
    const empresa = 'Samar';
    const valor = 156.87;

    servico.pagar(codigo, empresa, valor);
    const resultado = servico.consultarUltimoPagamento();

    assert.equal(resultado.categoria, 'cara');
    assert.equal(resultado.valor, 156.87);
    assert.equal(resultado.empresa, 'Samar');
  });

  it('Deve classificar o pagamento como "padrão" se o valor for menor ou igual a 100', () => {
    const servico = new ServicoDePagamento();
    const codigo = '1111-2222-3333';
    const empresa = 'NIKE';
    const valor = 50.00;

    servico.pagar(codigo, empresa, valor);
    const resultado = servico.consultarUltimoPagamento();

    assert.equal(resultado.categoria, 'padrão');
    assert.equal(resultado.valor, 50.00);
  });

  it('Deve retornar apenas o ÚLTIMO pagamento realizado', () => {
    const servico = new ServicoDePagamento();
    
    servico.pagar('111', 'Empresa A', 45.00);
    servico.pagar('222', 'Empresa B', 200.00);
    
    const resultado = servico.consultarUltimoPagamento();

    assert.equal(resultado.empresa, 'Empresa B');
    assert.equal(resultado.categoria, 'cara');
  });
});