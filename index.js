
function campoVacio(element, divError) {
  if(!element.value) {
    element.classList.add('is-invalid');
    document.getElementById(divError).innerHTML = 
          `El campo de ${element.name} es requerido.`;
    return true;
  } else {
    element.classList.remove('is-invalid');
    return false;
  }
}

function genderValidation(masculino, femenino, divError) {
  const container = document.getElementById(divError)
  if(!masculino.checked && !femenino.checked) {
     container.classList.add('is-invalid');
     container.classList.remove('hidden');
     return true;
  } else {
    container.classList.remove('is-invalid');
    container.classList.add('hidden');
    return false;
  }
}

const experienciasCheckBox = document.getElementById('tieneExperiencia');
// agrego un listener o escuchador
experienciasCheckBox.addEventListener('change', function visibilidad (event) {
  const contenedorExp = document.getElementById('contenedorExperiencias');
  if(event.target.checked) {
    contenedorExp.classList.remove('invisible');
  } else {
    contenedorExp.classList.add('invisible');
  }
})

function getGenero () {
  if(document.getElementById('masculino').checked) {
    return 'Masculino';
  } else {
    return 'Femenino';
  }
}

// esta funcion me imprime los datos 
const imprimirDatos = () => {
    document.getElementById('inscription-form').classList.add('invisible');
    document.getElementById('cardInformacion').classList.remove('invisible');
    // if ternario, u operacion ternaria o condicion ternaria

    // cammel case primera letra miniscula, a partir de agi toda palabra que venga con primera letra en mayus
    const tipoDoc = document.getElementById('documento').value === '1' ? 'Cedula de Ciudadania' : 'Tarjeta de identidad'
    document.getElementById('textoTipoDocumento').innerHTML = 
      `<span> Tipo Documento: ${tipoDoc} </span>`
    document.getElementById('textoDocumento').innerHTML = 
      `<span> Documento: ${document.getElementById('identification').value} </span>`
      document.getElementById('textoNombre').innerHTML = 
      `<span> Nombre: ${document.getElementById('name').value} </span>`
      document.getElementById('textoApellido').innerHTML = 
      `<span> Apellido: ${document.getElementById('lastName').value} </span>`
      document.getElementById('textoCorreo').innerHTML = 
      `<span> Correo: ${document.getElementById('correo').value} </span>`
      document.getElementById('textoGenero').innerHTML = 
      `<span> Genero: ${getGenero()} </span>`
      document.getElementById('textoProfesion').innerHTML = 
      `<span> Profesión: ${document.getElementById('profesion').value} </span>`
      let hobbiesTexto = '';
      const hobbies = document.getElementsByClassName('hobbieCB');
      for (const hobbie of hobbies) {
        if(hobbie.checked) {
          hobbiesTexto = ` ${hobbiesTexto} ${hobbie.value} ,`;
        }
      }
      document.getElementById('textoHobbie').innerHTML = 
        `<span> Hobbies: ${hobbiesTexto.slice(0, hobbiesTexto.length-1)} </span>`
      document.getElementById('textoPerfil').innerHTML = 
        `<span> Perfil: ${document.getElementById('perfil').value} </span>`
      if(document.getElementById('tieneExperiencia').checked) {
        document.getElementById('textoExperiencias').innerHTML = 
          `<span> Experiencias: ${document.getElementById('experiencias').value} </span>`
      }
}
// propagacion de eventos
function validateMyCode(event) {
  event.preventDefault();
  let hayUnError = false;

  if(genderValidation(
    document.getElementById('masculino'),
    document.getElementById('femenino'),
    'genderError'
  )) {
    hayUnError = true;
  }

  const hobbiesError = document.getElementById('hobbiesError'); 
  if(validarHobbie()) {
    hobbiesError.classList.remove('is-invalid');
    hobbiesError.classList.add('hidden');
  } else {
    hayUnError = true;
    hobbiesError.classList.add('is-invalid');
    hobbiesError.classList.remove('hidden');
  }

  const tieneExperiencia= document.getElementById('tieneExperiencia');
  const experiencias = document.getElementById('experiencias')
  if(tieneExperiencia.checked && experiencias.value === '') {
    hayUnError = true;
    experiencias.classList.add('is-invalid');
    document.getElementById('experienciaError').innerHTML = 
            `El campo de correo es requerido o esta mal escrito.`;
  } else {
     experiencias.classList.remove('is-invalid');
  }

  if(!hayUnError) {
    imprimirDatos();
  }
}

function validarHobbie() {
  const hobbies = document.getElementsByClassName('hobbieCB');
  for (const hobbie of hobbies) {
    if(hobbie.checked) {
      return true;
    }
  }
  return false;
}
// buscar que es un callback