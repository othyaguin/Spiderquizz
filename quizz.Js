const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem vindo(a) ao Quiz do Universo de Spider-Man\n");
console.log("Responda com a letra correta: a, b, c ou d\n");


let acertos = 0;

rl.question('1) Em qual filme o Homem-Aranha produz teias orgânicas naturalmente?\n(a) Homem-Aranha (2002)\n(b) O Espetacular Homem-Aranha (2012)\n(c) Homem-Aranha: De Volta ao Lar (2017)\n(d) Homem-Aranha: Longe de Casa (2019)\n', (resposta1) => {

    resposta1 = resposta1.toLowerCase().trim()
    if (resposta1 === 'a') {
        acertos++
    }

    rl.question('\n2) Em qual filme a namorada de Peter Parker morre durante a história?\n(a) Homem-Aranha 3 (2007)\n(b) O Espetacular Homem-Aranha 2 (2014)\n(c) Homem-Aranha: Sem Volta Para Casa (2021)\n(d) Homem-Aranha 2 (2004)\n', (resposta2) => {

        resposta2 = resposta2.toLowerCase().trim()
        if (resposta2 === 'b') {
            acertos++
        }

        rl.question('\n3) Em qual filme o Homem-Aranha aparece pela primeira vez no Universo Cinematográfico da Marvel?\n(a) Homem-Aranha: De Volta ao Lar (2017)\n(b) Vingadores: Guerra Infinita (2018)\n(c) Capitão América: Guerra Civil (2016)\n(d) Vingadores: Ultimato (2019)\n', (resposta3) => {

            resposta3 = resposta3.toLowerCase().trim()
             if (resposta3 === 'c') {
                acertos++
            }

            if (acertos === 3) {
                console.log(`\nVocê acertou ${acertos} de 3 perguntas! - VOCÊ É UM FÃ DE HOMEM-ARANHA!`)
            } else if (acertos === 2) {
                console.log(`\nVocê acertou ${acertos} de 3 perguntas! - VOCÊ É UM ESPECTADOR RECENTE DE HOMEM-ARANHA!`)
            } else if (acertos === 1) {
                console.log(`\nVocê acertou ${acertos} de 3 perguntas! - VOCÊ É UM FANBOY DE HOMEM-ARANHA!`)
            } else {
                console.log(`\nVocê acertou ${acertos} de 3 perguntas! - VOCÊ NUNCA ASSISTIU HOMEM-ARANHA!`)
            }

            rl.close()

        })
    })
})



