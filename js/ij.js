
  



var botonU = document.getElementById('botonU');
    botonU.addEventListener('click', function  (){
    
        let categoría = document.getElementById('opciones').value;
        console.log(categoría);
       
        let precio = 200;
        let cantidad = document.getElementById('cantidad').value;
        let total =  cantidad * precio;
        let PrecioFinal
          
       
            switch (categoría) {
                case "Estudiante":
                      PrecioFinal= total;
                      PrecioFinal = PrecioFinal - [80 * (total/100)]
                      console.log (PrecioFinal)
                     document.getElementById('final').innerHTML= PrecioFinal;
                      
                      break;
    
                 case "Trainee":
                    PrecioFinal= total;
                    PrecioFinal = PrecioFinal - [50 * (total/100)]
                    console.log (PrecioFinal)
                   document.getElementById('final').innerHTML= PrecioFinal;
                    break;
    
                 case "Junior":
                    PrecioFinal= total;
                      PrecioFinal = PrecioFinal - [15 * (total/100)]
                      console.log (PrecioFinal)
                     document.getElementById('final').innerHTML= PrecioFinal;
                    break;  
    
                default:
                      break;
              }
        }

         

         
    
    )


