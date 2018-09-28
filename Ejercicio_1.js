function ejercicio1(num,areglo){
    var cont=0;
    for(let i=0;i<areglo.length;i++){
        if(areglo[i]==num) cont++;
    }
    return cont;
}