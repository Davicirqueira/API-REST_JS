import express from "express";

const servidor = express();

servidor.get('/helloworld', (req, resp) => {

    resp.send('Foco.');

});

// Parâmetro Rota //
servidor.get('/calculadora/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    resp.send(n1 + n2);

});

servidor.listen(5001, () => console.log(`Api conectada com sucesso.`))