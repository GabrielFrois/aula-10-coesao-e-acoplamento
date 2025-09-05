// Acoplamento Fraco
class Motor {
  ligar(): void {
    console.log("Motor ligado.");
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
