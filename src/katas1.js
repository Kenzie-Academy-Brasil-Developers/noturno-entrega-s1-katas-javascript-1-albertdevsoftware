

for (let counter = 1;counter <= 20;counter = counter++) {
  console.log(counter);
}


// //call function oneThroughTwenty

function retornarPares(numero) {

  for (let contador = 1;contador <= numero;contador++){
      if (contador % 2 === 0 ){
          console.log(contador);
           }           
      }
  }
  retornarPares(20)

//function retornarimpares(numero){
  function retornarimpares(numero) {
  for (let contador = 1;contador <= numero;contador++){
    if (contador % 2 != 0 ){
        console.log(contador);
         }           
    }

}

retornarimpares(20)


// function multiplesOfFive
for (let counter = 5;counter <= 100;counter = counter+5) {
  console.log(counter);

}


// //call function multiplesOfFive

// function squareNumbers() {
    
//  /* Your code goes below
//   Write a for or a while loop
//   return the result */
    
// }

// //call function squareNumbers

// function countingBackwards() {
    
let numero = 20;
while(numero >= 2){
  console.log(numero);
  numero = numero - 1;
 }
// }

// //call function countingBackwards

// function evenNumbersBackwards() {
    
  for (let counter = 20;counter >= 1;counter = counter-2) {
    if (counter % 2 === 0 ){
        console.log(counter);
         }           

}

// //call function evenNumbersBackwards

// function oddNumbersBackwards() {
    
  for (let counter = 20;counter >= 1;counter = counter-1) {
    if (counter % 2 !== 0 ){
        console.log(counter);
         }           

}
// //call function oddNumbersBackwards

// function multiplesOfFiveBackwards() {
  function retornamultiplos(Maximo){
    function variable (Minimo){
    
    for (let counter = Maximo;counter >= Minimo;counter = counter-5) {
        console.log(counter);
    
                     }
                 }
                 variable(5)
            }
                        
        
    
    retornamultiplos(100)
// //call function multiplesOfFiveBackwards

// function squareNumbersBackwards() {
    
//    /* Your code goes below
//   Write a for or a while loop
//   return the result */
// }

// //call function squareNumbersBackwards
