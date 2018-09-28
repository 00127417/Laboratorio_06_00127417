function ejercicio3(arreglo){
    var contN=0,contB=0,contC=0,contS=0;
    for(let i;i<arreglo.length;i++){
        if(typeof(arreglo[i])=='number'){
            contN++;
        }
        else if(typeof(arreglo[i])=='boolean'){
                contB++;
            }
        else if(typeof(arreglo[i])=='string'){
                    contC++;
            }
        else if(typeof(arreglo[i])=='symbol'){
                        contS++;
            }
                
    }
    console.log('number '+contN+' boolean '+contB+' string '+contC+' symbol '+contS)
}