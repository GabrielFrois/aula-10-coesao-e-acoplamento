// Aclopamento Médio
class Motor {
  ligar(): void {
    console.log("Motor ligado.");
  }

  desligar(): void {
    console.log("Motor desligado.");
  }
}

class Carro {
  private motor: Motor;
  constructor(motor: Motor) {
    this.motor = motor;
  }

  ligarMotor(): void {
    this.motor.ligar();
  }
}