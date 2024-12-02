let num = [3, 5, 6, 9, 7, 8]

console.log(num)

/*for (let pos = 0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(num[pos])
}