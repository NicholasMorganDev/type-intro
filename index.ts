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

console.log('The crypto one is:', taxForm.cryptoTaxForm)