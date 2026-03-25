
//Escribe un comentario explicando para qué sirve http
//El módulo http sirve para crear un servidor web y manejar las peticiones requests y responses a través del protocolo HTTP.
import http from 'http';

//Escribe un comentario explicando para qué sirve fs
//El módulo fs sirve para interactuar con el sistema de archivos del sistema operativo
import fs from 'fs';


//Esta función deberá mostrar deberá mostrar una página HTML
//con la bienvenida a tu proyecto
function darBienvenida(req, res) {
  //Agrega lo mínimo necesario en bienvenida.html

  fs.readFile('bienvenida.html', 'utf8', (error, data) => {
    if (error) {
        //Escribe qué significa el 500
        //El código 500 significa "Internal Server Error".
        //Indica que el servidor encontró una condición inesperada que no le permitio cumplir con la solicitud.
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Oh no!!!!');
      return;
    }
    //Escribe qué significa el 200
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
});
}


//Esta función deberá enviar un json con los datos de las mascotas
function getMascotas(req, res) {
    //Esto representa un objeto JSON de una mascota
    //Agrega otra mascota
    const mascotas = [
        {
            "nombre": "Pikachu",
            "color": "Amarillo"
        },
        {
            "nombre": "Eevee",
            "color": "Café"
        }
    ];
  res.writeHead(200, { 'Content-Type': 'application/json' });

  //Escribe qué hace la función stringify y por qué la tenemos que usar
  // JSON.stringify convierte un objeto o arreglo de JavaScript en una cadena de texto JSON.
  // La tenemos que usar porque el protocolo HTTP transfiere información en forma de texto,
  res.end(JSON.stringify(mascotas));
}


function mostrarPerfil(req, res) {
    fs.readFile('perfil.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
  }


function mostrarAdoptantes(req, res) {
  //Construye una página básica adpotantes.html
  fs.readFile('adoptantes.html', 'utf8', (error, data) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Oh no!!!!');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
  });
}

//Esta función deberá enviar un json con los datos de las adoptantes
function getAdoptantes(req, res) {
//Tienes que corregir varias cosas en esta sección
    const adoptantes = [
        { "nombre": "Ana", "edad": 28 },
        { "nombre": "Carlos", "edad": 35 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(adoptantes));
}


function manejarRuta404(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  //Cambia el mensaje por algo más divertido
  res.end('Alguien no sabe escribir, estas intentando entrar a una pagina que no existe.');
}

function mostrarEquipo(req, res) {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! No se encuentra la página del equipo.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!! No se encuentra la página de opinión.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function mostrarMascotas(req, res) {
    fs.readFile('mascotas.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

//incluye el enlace a la documentación de createServer
const servidor = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    darBienvenida(req, res);
  } else if (url === '/api/mascotas') {
    getMascotas(req, res);
  } else if (url === '/api/adoptantes') {
    getAdoptantes(req, res);
  }
  else if (url === '/mascotas') {
    mostrarMascotas(req, res);
  }
  else if (url === '/adoptantes') {
    mostrarAdoptantes(req, res);
  } else if (url === '/equipo') {
      mostrarEquipo(req, res);
  } else if (url === '/opinion') {
      mostrarOpinion(req, res);
  }

  //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
  //Haz una página equipo.html correspondiente
  //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
  //Trata de agregar una imagen a equipo.html
  //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

  //Agrega una ruta /opinion
  //Haz una página opinion.html
  // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
  //¿Qué es el freedombox?
  //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south


  else {
    manejarRuta404(req, res);
  }
});

const puerto = 1984;
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

//Importante
//En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html