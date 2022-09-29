var alumno = {
  nombre: "Marco",
  calificacion: 20,
  grado: 2,
  materias: ["Matematicas", "Historia", "Fisica", "Quimica"],
}

var pelota = {
  poisiconx: 150,
  posiciony: 150,
  radio:50,
  colores:["Pink", "Yellow", "Blue", "Green", "Red"],
}

function setup() {
  createCanvas(400, 400);
  console.log (alumno.nombre);
  console.log (alumno.calificacion);
  console.log (alumno.materias[0]);
}

function draw() {
  background(220);
  circle (pelota.poisiconx, pelota.posiciony, pelota.radio);
  fill (pelota.colores[0]);
}