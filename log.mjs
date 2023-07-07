export function log (mensagem) {
    console.log("Usando minha variável de ambiente: ", process.env.MINHA_VAR)
    console.log("Adicionando a funcao via log: ", mensagem)
} 