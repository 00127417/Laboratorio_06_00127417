var arregloPersona=[];
function ejercicio11(nombre,apellido,fecha,numTel,email){
    var persona=new Object();
    persona.nombre=nombre;
    persona.apellido=apellido;
    persona.fechaNacimiento=fecha;
    persona.numTelefono=numTel;
    persona.email=email;

    arregloPersona.push(persona);
}