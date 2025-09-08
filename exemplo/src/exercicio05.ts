class AutenticacaoDeUsuario{
    public usuarios:Map<string, string>;

    constructor(){
        this.usuarios = new Map<string, string>();
        console.log("Sistema de autenticação iniciado");
    }

    public registrarUsuario(usuario:string, senha:string):void{
        if (this.usuarios.has(usuario)){
            console.log(`${usuario} já está registrado`);
        } else {
            this.usuarios.set(usuario, senha);
        }
    }

    public autenticarUsuario(usuario:string, senha: string): boolean{
        if(this.usuarios.has(usuario)){
            // get(usuario) retorna a senha do usuário para comparação
            return this.usuarios.get(usuario) === senha;
        }
        return false;
    }
}

const autenticacao = new AutenticacaoDeUsuario();
autenticacao.registrarUsuario("alice", "senha123");
autenticacao.registrarUsuario("bob", "outrasenha");
const usuarioAutenticado = autenticacao.autenticarUsuario("alice", "senha123");
if(usuarioAutenticado){
console.log("Usuário autenticado com sucesso!");
} else {
console.log("Falha na autenticação do Usuário!");
}