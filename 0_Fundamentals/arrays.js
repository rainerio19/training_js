const valor = [7.7, 8.9, 6.4, 9.3]
console.log(valor[0], valor[3])

console.log(valor[2])
console.log(valor.length)

valor.push({id:3}, false, null, 'teste')
console.log(valor)

console.log(valor.pop())
delete valor[0]
console.log(valor)

console.log(typeof valor)