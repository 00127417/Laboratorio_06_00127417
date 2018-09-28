function ejercicio9(){
    var arreglo=[];
    
    for(let i=0;i<20;i++){
        arreglo[i]=Math.floor((Math.random()*100)+1)
    }
    console.log(arreglo)
    var flag=true;
    while(flag){
        var num=prompt('Ingrese un numero');
        for(let i=0;i<20;i++){

            if(arreglo[i]==num){
                console.log('Ganaste');
                flag=false;
            }
            else console.log('El numero no se encontraba en el arreglo');
        }
    }
}