// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function contaratevinte(){

  let meuRetorno = [];
  
              for (let counter = 1;counter <= 20;counter++) {
                   meuRetorno.push(counter);
              }      
              return meuRetorno; 
          }
// Mostra resultado              
    console.log(contaratevinte());

// Fim

//.........................................................................................

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function retornarPares(numero) {

  let meuRetorno =[];

  for (let contador = 1;contador <= numero;contador++){
      if (contador % 2 === 0 ){
          meuRetorno.push(contador);
           }      
               
      }
      return meuRetorno; 
  }
  // Mostra resultado  
    console.log(retornarPares(20));

// Fim

//.........................................................................................

  // Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
  function retornarimpares(numero) {

    let meuRetorno =[];

        for (let contador = 1;contador <= numero;contador++){
            if (contador % 2 !== 0 ){
                meuRetorno.push(contador);
            }      
                    
        }return meuRetorno; 
    }

// Mostra resultado  
    console.log(retornarimpares(20));

// Fim

//.........................................................................................

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplosdecinco(numero){

  let meuRetorno = [];

      for (let counter = 5;counter <= numero;counter = counter+5){
          meuRetorno.push(counter)
      }
  
      return meuRetorno;
  }
// Mostra resultado
      console.log(multiplosdecinco(100));

// Fim

//.........................................................................................

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function quadradosperfeitos(){

    let meuRetorno = [];
  
        for (let counter = 1;counter <= 10;counter++){
            meuRetorno.push(counter*counter);
        }
    
        return meuRetorno;
    }
  // Mostra resultado
        console.log(quadradosperfeitos());
  
  // Fim


//.........................................................................................

// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function retornarimpares() {

  let meuRetorno =[];

      for (let contador = 20;contador >= 1;contador = contador -1){
          if (contador % 2 !== 0 ){
              meuRetorno.push(contador);
          }      
                  
      }return meuRetorno; 
  }
// Mostra resultado  
      console.log(retornarimpares());
// Fim

//.........................................................................................

// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function retornarPares() {
  let meuRetorno =[];

  for (let contador = 20;contador >= 1;contador = contador -1){
      if (contador % 2 === 0 ){
          meuRetorno.push(contador);
           }      
               
      }
      return meuRetorno; 
  }
// Mostra resultado
      console.log(retornarPares());
// Fim

//.........................................................................................      

// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function retornarimpares() {
  let meuRetorno =[];
      for (let contador = 20;contador >= 1;contador = contador -1){
          if (contador % 2 !== 0 ){
              meuRetorno.push(contador);
          }      
                  
      }return meuRetorno; 
  }
// Mostra resultado  
      console.log(retornarimpares());
// Fim

//.........................................................................................    

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplosdecinco(){

  let meuRetorno = [];

      for (let counter = 100;counter >= 5;counter = counter = counter -5){
          meuRetorno.push(counter)
      }
  
      return meuRetorno;
  }
// Mostra resultado  
  console.log(multiplosdecinco());
// Fim

//.........................................................................................     

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function quadradosperfeitos(){

    let meuRetorno = [];
  
        for (let counter = 10;counter >= 1;counter--){
            meuRetorno.push(counter*counter);
        }
    
        return meuRetorno;
    }
  // Mostra resultado
        console.log(quadradosperfeitos());
  
  // Fim
  
//.........................................................................................    