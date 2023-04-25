let age : number = 20;

let firstName: string = "Nick"

let isTall: boolean = true;

let childrensNames: string[] = ['Jonathan', 'Camilla'] 

//console.log(age)
console.log(`${firstName} is ${age} years old`)

if (isTall) {
  console.log('and so tall')
} else {
  console.log('and so pretty')
}

for (let i: number = 0; i < childrensNames.length; i++) {
  console.log(childrensNames[i])
}

enum taxForm {
  standardTaxForm = '1040',
  childTaxForm = '641',
  cryptoTaxForm = '420Z',
}

//console.log('The crypto one is:', taxForm.cryptoTaxForm)

let zipCode: string | number = '12345'
zipCode = 'ABCDE'
//zipCode = true

console.log(zipCode)

function sum(x: number, y: number) {
  return x+y
}

let total: number = sum(4,5)

console.log(total)

function debug(message: string) : void {
  console.log(message)
}

debug("Hello World!")

interface person {
  firstName: string,
  age: number,
  children?: string[],
  hasCertificate: boolean
}

let nick: person = {
  firstName: 'me',
  age: 20,
  hasCertificate: true,
}

console.log(nick)
