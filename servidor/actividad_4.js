import http from 'http';
import url from 'url';
import chalk from 'chalk';

const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=coldplay');
        const datos = await respuesta.json();
        return datos.artists[0];
    } catch (error) {
        console.error('Error:', error);
    }
};

const servidor = http.createServer(async (req, res) => {
    console.log(chalk.green.inverse("Alguien me mandó una solicitud"));
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    res.writeHead(200, {"content-type": 'application/json'})
    if (queryParams.x == 10){
        res.end(JSON.stringify(
            {"x": queryParams.x}
        ));
    }else{
        res.end(JSON.stringify(await obtenerDatos()));
    }
});

const puerto = 1984;

servidor.listen(puerto, () =>{
    console.log(chalk.cyan.inverse('Servidor escuchando en el puerto ${puerto}'));
});

