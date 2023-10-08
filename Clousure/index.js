
//FUNCAO QUE RETORNA OUTRA FUNCAO E DEIXA MEMORIZADA NA MEMORIA GLOBAL APOS INVOCAR
function createFunction(){
  function multiplyBy2 (num){
    return num * 2 
  }
  return multiplyBy2
}

const generateFunc = createFunction()

const result = generateFunc(3)
const newResult = generateFunc(5)
console.log("RESULT____",result)
console.log("RESULT____",newResult)

//CASO TENHA UMA VARIAVEL(DADO COMO COUNTER = 0) ELE SALVA NO GLOBAL MEMORY NA "MOCHILA" DA FUNCAO E ASSIM QUE FUNCIONA
function outer(){
  let counter = 0;
  function incrimetCounter(){
    counter++;
    console.log(counter)

  }
   return incrimetCounter;
}

const myNewFunction = outer();

myNewFunction();
myNewFunction();


