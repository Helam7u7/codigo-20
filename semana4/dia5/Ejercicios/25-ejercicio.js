const focos = ["verde","rojo","verde","blanco"];

const contarFocos = () => {
    let focosBlancos = 0;
    let focosVerdes = 0;
    let focosRojos = 0;
    
    for (let i = 0; i < focos.length; i++) {
        if (focos[i] === "blanco"){
            focosBlancos++;
        }
        if (focos[i] === "verde"){
            focosVerdes++;
        }
        if (focos[i] === "rojo"){
            focosRojos++;
        }
    }

    return {
        focosBlancos: focosBlancos,
        focosVerdes: focosVerdes,
        focosRojos: focosRojos,
    }
};

console.log(contarFocos());