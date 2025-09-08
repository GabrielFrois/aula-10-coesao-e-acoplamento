class Carrinho {
  public itens: Item[] = [];

  public adicionarItem(item: Item): void {
    this.itens.push(item);
  }

  public removerItem(item: Item): void {
    let x = this.itens.indexOf(item); // Função para descobrir a posição do item

    if (x != -1) {
      // Se o item não for encontrado pelo indexOf() no array, ele retorna -1
      this.itens.splice(x, 1); // A partir da posição "x", remove 1 item
    } else {
      console.log(`${item} não existe na lista`);
    }
  }

  public calcularTotal(): number {
    return this.itens.reduce((soma, item) => {
      return soma + item.valor * item.quantidade;
    }, 0);
  }
}

class Item {
  public descricao: string;
  public valor: number;
  public quantidade: number;

  public constructor(descricao: string, valor: number, quantidade: number) {
    this.descricao = descricao;
    this.valor = valor;
    this.quantidade = quantidade;
  }
}

class Pagamento {
  public processarPagamento(valor: number, forma: string): void {
    console.log(
      `Pagamento de R$${valor.toFixed(2)} em ${forma}, processado com sucesso!`
    );
  }
}

const carrinhoc = new Carrinho();
let item = new Item("Camiseta", 50, 2);
carrinhoc.adicionarItem(item);
item = new Item("Calça", 130, 1);
carrinhoc.adicionarItem(item);
item = new Item("Meia", 20, 3);
carrinhoc.adicionarItem(item);
const total = carrinhoc.calcularTotal();
console.log(total);
const pagamento = new Pagamento();
pagamento.processarPagamento(total, "dinheiro");
