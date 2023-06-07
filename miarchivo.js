  function calcularTipoFalta(horarioIngreso) {
    let horarioDeseadoInicio = new Date("June 4, 2023 07:30 AM");
    let horarioDeseadoFin = new Date("June 4, 2023 12:05 PM");
    let horarioIngresoDate = new Date("June 4, 2023 " + horarioIngreso);

    if (isNaN(horarioIngresoDate)) {
      alert("Formato de fecha inválido. Por favor, ingrese el horario en el formato HH:MM AM/PM.");
      return "";
    }

    if (horarioIngresoDate >= horarioDeseadoInicio && horarioIngresoDate <= horarioDeseadoFin) {
      if (horarioIngresoDate.getHours() === 7 && horarioIngresoDate.getMinutes() >= 40) {
        return "0.25 falta";
      } else if (horarioIngresoDate.getHours() >= 8) {
        return "0.5 falta";
      } else {
        return "No hay falta";
      }
    } else {
      return "Fuera del rango horario";
  
    }
  }

  let horarioIngreso = prompt("Ingrese el horario de ingreso (HH:MM AM/PM):");

  let tipoFalta = calcularTipoFalta(horarioIngreso);

  console.log("Horario de ingreso: " + horarioIngreso);
  console.log("Tipo de falta: " + tipoFalta);
