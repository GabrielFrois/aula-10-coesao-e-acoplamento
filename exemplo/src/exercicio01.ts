class ContaBancaria {
  private saldo: number = 0;

  constructor() {
    console.log("Conta Bancária criada com saldo inicial de R$0,00");
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(
        `Depósito bem-sucedido, o novo saldo é de R$${this.saldo.toFixed(2)}`
      );
    } else {
      console.log("Valor de depósito inválido. Insira um valor positivo.");
      return;
    }
  }

  public sacar(valor: number): void {
    if (valor > 0) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(
          `Saque de R$${valor.toFixed(
            2
          )} realizado com sucesso, o novo saldo é de R$${this.saldo.toFixed(
            2
          )}`
        );
      } else {
        console.log("Saldo insuficiente");
      }
    } else {
      console.log("Valor de saque inválido. Insira um valor positivo.");
      return;
    }
  }

  // Getter público para acessar o saldo de forma segura
  public getSaldo(): number {
    return this.saldo;
  }
}

class Cliente {
  constructor(
    private nome: string,
    private cpf: string,
    private nasc: Date,
    private nomeMae: string,
    private conta: ContaBancaria
  ) {
    console.log(`Cliente ${this.nome} criado com sucesso`);
  }

  // Métodos para o cliente interagir com sua conta
  public fazerDeposito(valor: number): void {
    console.log(`\n${this.nome} está fazendo um depósito...`);
    this.conta.depositar(valor);
  }

  public fazerSaque(valor: number): void {
    console.log(`\n${this.nome} está realizando um saque...`);
    this.conta.sacar(valor);
  }

  public verSaldo(): void {
    console.log(
      `\nO saldo atual da conta de ${this.nome} é R${this.conta
        .getSaldo()
        .toFixed(2)}`
    );
  }
}

// Instância para criar uma conta bancária
const minhaConta: ContaBancaria = new ContaBancaria();

const dataNascimento: Date = new Date("2001-07-17");
const euCliente: Cliente = new Cliente(
  "Gabriel Frois",
  "111.111.111-11",
  dataNascimento,
  "Maria",
  minhaConta // Passando a instância da conta para o cliente
);

euCliente.fazerDeposito(100);
euCliente.fazerSaque(50);
euCliente.fazerSaque(60);
euCliente.verSaldo();
