/*Variáveis*/
var nome ='alexandro'
let sobrenome = 'espanhol'//vamosutilizar essa forma 
nomedomeio = 'rodrigo'

let n1 = 2
let n2 = 9.5
let comida ='maça'
let fumante = false

console.log(n1,n2, comida, fumante)

/*Tipos de dados*/
console.log(typeof n1)//2é number
console.log(typeof n2)//9.5 é number
console.log(typeof comida )//'maça'é string
console.log(typeof fumante)//false é boolean

let veiculos = ['carro' ,'moto', 'avião']//array
console.log(typeof veiculo)//todo array é do tipo abject em js

let salvar = function(){

}
console.log(typeof salvar)//salvar é do tipo function

/*Estruturas de decisão*/
/*
if(condição){
    valor se a cndição for verdadeiro 
}else{
    valor se a condição for falso 
}
*/
let nota = 10
if(nota=> 5){//if sem else
    console.log("passou")
}else{
    console.log("reprovou")
}
if (nota >=5){//if sem else
console.log("Parabens,está arovado")
}

if(nota >=7){//if com + condiçoes 
    console.log("aprovado")
}else if(nota >5){
    console.log("recuperação")
}else{
console.log("reprovado")
}

let dia = 2
switch(dia){
    case 1:
        console.log("Domingo")
        break
        case 2:
            console.log("Segunda")
            break
            default:
                console.log("Dia inválido")
}

/* Estrura de repetição*/
let contador = 1
while(contador <=10){
    console.log(contador)
    contador++//contador = contador +1
}
for(let contador2= 10; contador2<=20;contador2++){
    console.log(contador2)

}

/*
while(condição){
    código do laço de repetição
}

for(inicialização;condiçoes;incremento){
    código do laço de repetição
}
*/