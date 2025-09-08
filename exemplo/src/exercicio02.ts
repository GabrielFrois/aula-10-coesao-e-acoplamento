class CarrinhoDeCompras {
  private itens: string[] = [];

  public adicionarItem(item: string): void {
    this.itens.push(item);
  }

  public removerItem(item: string): void {
    let x = this.itens.indexOf(item); // Função para descobrir a posição do item

    if (x != -1) {
      // Se o item não for encontrado pelo indexOf() no array, ele retorna -1
      this.itens.splice(x, 1); // A partir da posição "x", remove 1 item
    } else {
      console.log(`${item} não existe na lista`);
    }
  }

  public imprimir(): void {
    console.log(this.itens);
  }
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Camiseta");
carrinho.adicionarItem("Calça");
carrinho.adicionarItem("Meia");
carrinho.removerItem("Camiseta");
carrinho.imprimir();
