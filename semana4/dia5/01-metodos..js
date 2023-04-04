let alumnos = ["Juan", "Pedro", "Maria", "Jose", "Luis","Maria"];
const copiaAlumnos = alumnos;

// for (let i = 0; i < alumnos.length; i++) {
//     console.log(alumnos[i]);
// }

// ForEach
let alumnosSoloMaria = [];
alumnos.forEach((alumno, i)=> {
    // console.log(i, alumno);
    if (alumno === 'Maria') {
        alumnosSoloMaria.push(alumno + " " + "Perez")
    }
});
console.log(alumnosSoloMaria);

// map
const nuevosAlumnos = alumnos.map((alumno, i)=> {
    if (alumno === 'Pedro') {
        return alumno + " " + i;
    } else {
        return alumno;
    }
});
console.log(nuevosAlumnos);

// filter
const alumnosSinMaria = alumnos.filter((alumno,i)=> {
    return i !== 0;
})
console.log(alumnosSinMaria);

// Find 
const alumnoEncontrado = alumnos.find((alumno, i) =>{
    return alumno === 'Maria';
}) 
console.log(alumnoEncontrado); //Maria

// FindIndex 
const indexAlumno = alumnos.findIndex((alumno)=>{
    return alumno === 'Jose'
})
console.log(indexAlumno); //3

// some
const existeAlumno = alumnos.some((alumno) => {
    return alumno === "Luis";
})
console.log(existeAlumno); //true