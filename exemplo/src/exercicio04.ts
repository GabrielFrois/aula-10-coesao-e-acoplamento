class Agenda {
    public contatos: Contato[] = [];

    public adicionarContato(contato:Contato):void{
        this.contatos.push(contato);
        console.log(`${contato.nome} registrado com sucesso!`)
    }

    public removerContato(contato:Contato): void{
        let x = this.contatos.indexOf(contato);

        if(x != -1){
            this.contatos.splice(x, 1);
            console.log(`${contato.nome} removido da agenda!`);
        } else {
            console.log("Esse contato não existe na lista!");
        }
    }
}

class Contato {
    public nome:string;
    public telefone:string;
    public email:string;

    constructor(nome:string, telefone:string, email:string){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

const agenda = new Agenda();

let contato1 = new Contato("Gabriel", "(12)1212-1212", "gabriel@email.com");
let contato2 = new Contato("Klara", "(81)8181-8181", "klara@email.com");

agenda.adicionarContato(contato1);
agenda.adicionarContato(contato2);
console.log(agenda.contatos);

agenda.removerContato(contato1);
console.log(agenda.contatos);

agenda.removerContato(contato1);