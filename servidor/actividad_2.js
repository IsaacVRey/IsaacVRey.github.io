import http from 'http';
import url from 'url';
import chalk from 'chalk';

const servidor = http.createServer((req, res) => {
    console.log(chalk.green.inverse("Alguien me mandó una solicitud"));
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    res.writeHead(200, {"content-type": 'text/plain'})
    if (queryParams.x == 10){
        res.end(('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas... \n'+queryParams.x));
    }else{
        res.end(('Nací ayer\n'));
    }
});

const puerto = 1984;

servidor.listen(puerto, () =>{
    console.log(chalk.cyan.inverse('Servidor escuchando en el puerto ${puerto}'));
});

