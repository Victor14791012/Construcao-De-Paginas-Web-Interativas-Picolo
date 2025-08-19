console.log("Hello World")

let nome = "Neyma"
//concatenação
// console.log("Meu nome é " + nome)

//interpolação
// console.log(`Meu nome é ${nome}`) 

// if (nome === "Victor") {
//     console.log("Meu nome é Victor")
// } else if (nome === "Neymar") {
//     console.log("Meu nome não é Victor eu sou o Neymar")
// } else {
//     console.log("Meu nome é Neymar")
// }

switch (nome) {
    case "Victor":  
        console.log("Meu nome é Victor")
        break
    case "Neymar":
        console.log("Meu nome não é Victor eu sou o Neymar")
        break
    default:
        console.log("Meu nome é Neymar")
        break
}   