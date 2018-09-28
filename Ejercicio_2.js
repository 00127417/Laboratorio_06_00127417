function ejercicio2(arreglo){
    var sum=0;
    arreglo.forEach(e => {
        sum=sum+e;
    });
    return sum/arreglo.length;
}