class Produto {
    id: string;
    nome: string;
    descricao: string;
    tamanho: string;
    cor: string;
    quantidadeEstoque: number;
    quantidadeMinimaEstoque: number;
  }
  
  class Venda {
    data: Date;
    quantidadeVendida: number;
    valorTotal: number;
    lucroGerado: number;
  }
  
  class Fornecedor {
    nome: string;
    endereco: string;
    contato: string;
  }
  
  class SistemaGerenciamentoEstoque {
    produtos: Produto[];
    vendas: Venda[];
    fornecedores: Fornecedor[];
  
    rastrearProduto(produto: Produto): void {
    }
  
    definirQuantidadeMinimaEstoque(produto: Produto, quantidadeMinima: number): void {

    }
  
    receberAlertasEstoqueBaixo(): void {
    }
  
    visualizarHistoricoVendas(periodo: string): void {
    }
  
    criarOrdemCompraAutomatica(): void {
    }
  
    integrarFornecedores(): void {
    }
  }
  
  const sistemaEstoque = new SistemaGerenciamentoEstoque();
  
  const produto1 = new Produto();
  produto1.id = "123";
  produto1.nome = "Camiseta";
  produto1.descricao = "Camiseta de algodão";
  produto1.tamanho = "M";
  produto1.cor = "Branca";
  produto1.quantidadeEstoque = 50;
  produto1.quantidadeMinimaEstoque = 10;
  
  sistemaEstoque.rastrearProduto(produto1);
  sistemaEstoque.definirQuantidadeMinimaEstoque(produto1, 10);
  sistemaEstoque.receberAlertasEstoqueBaixo();
  sistemaEstoque.visualizarHistoricoVendas("2023");
  sistemaEstoque.criarOrdemCompraAutomatica();
  sistemaEstoque.integrarFornecedores();
  