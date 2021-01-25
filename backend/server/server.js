const express = require('express');

const db = require('../db/connect');

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

//APP PRODUTO

app.get('/produto/', async(req, res) => {

    try {
        let results = await db.allProduto();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/', async(req, res) => {

    try {
        let results = await db.displayProdutoAvailable();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/plataforma/:plataforma', async(req, res) => {

    try {
        let results = await db.displayProdutoPlataforma(req.params.plataforma);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/consola/:consola', async(req, res) => {

    try {
        let results = await db.displayProdutoConsola(req.params.consola);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/categoria/:categoria', async(req, res) => {

    try {
        let results = await db.displayProdutoCategoria(req.params.categoria);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/classificacao/:classificacao', async(req, res) => {

    try {
        let results = await db.displayProdutoClassificacao(req.params.classificacao);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/genero/:genero', async(req, res) => {

    try {
        let results = await db.displayProdutoGenero(req.params.genero);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/id/:id', async(req, res) => {

    try {
        let results = await db.oneProduto(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/produto/:id/updatepreco', async(req, res) => {
    try {
        let results = await db.updatePrecoProduto(req.body.preco, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/produto/:id/updatestock', async(req, res) => {
    try {
        let results = await db.updateStockProduto(req.body.stock, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/produto/:id/updatestockcompra', async(req, res) => {
    try {
        let results = await db.updateStockProdutoAfterSale(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/produto/:id/updateclassificacao', async(req, res) => {
    try {
        let results = await db.updateClassificacaoProduto(req.body.classificacao, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/produto/:id/updateativo', async(req, res) => {
    try {
        let results = await db.updateAtivoProduto(req.body.ativo, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/produto/insert', async(req, res) => {
    try {
        let results = await db.insertProduto(req.body.nome, req.body.categoria, req.body.preco, req.body.stock, req.body.descricao, req.body.plataforma, req.body.consola, req.body.classificacao, req.body.genero, req.body.imagem, req.body.ativo);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/generos', async(req, res) => {
    try {
        let results = await db.displayGeneros();
        console.log(results);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP CLIENTE

app.get('/cliente/', async(req, res) => {

    try {
        let results = await db.allCliente();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/cliente/:id', async(req, res) => {

    try {
        let results = await db.oneCliente(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/cliente/insert', async(req, res) => {
    try {
        let results = await db.insertCliente(req.body.username, req.body.password, req.body.nome, req.body.email);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/cliente/:id/update', async(req, res) => {
    try {
        let results = await db.updateNomeCliente(req.body.nome, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/cliente/:id/updateteste', async(req, res) => {
    try {
        let results = await db.updateTesteCliente(req.body.password, req.body.nome, req.body.email, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP ADMIN

app.get('/admin/', async(req, res) => {

    try {
        let results = await db.allAdmin();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP COMPRA

app.get('/compra/', async(req, res) => {

    try {
        let results = await db.allCompra();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/compra/cliente/:idcli', async(req, res) => {

    try {
        let results = await db.allCompraFromCliente(req.params.idcli);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/compra/:id', async(req, res) => {

    try {
        let results = await db.oneCompra(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/compra/insert', async(req, res) => {
    try {
        let results = await db.insertCompra(req.body.valor, req.body.data, req.body.idcli, req.body.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP AVALICAO

app.get('/avaliacao/', async(req, res) => {

    try {
        let results = await db.allAvaliacao();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/avaliacao/:id', async(req, res) => {

    try {
        let results = await db.oneAvaliacao(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/avaliacao/insert', async(req, res) => {
    try {
        let results = await db.insertAvaliacao(req.body.idcli, req.body.idpro, req.body.classificacao, req.body.comentario);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/avaliacao/remove', async(req, res) => {
    try {
        let results = await db.removeAvaliacao(req.body.idcli, req.body.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP FAVORITO

app.get('/favorito/', async(req, res) => {

    try {
        let results = await db.allFavorito();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/favorito/:id', async(req, res) => {

    try {
        let results = await db.oneFavorito(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/favorito/cliente/:idcli', async(req, res) => {
    try {
        let results = await db.allFavoritoFromCliente(req.params.idcli);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/teste/cliente/:idcli', async(req, res) => {
    console.log(req.params.idcli);
    try {
        let results = await db.teste(req.params.idcli);
        console.log(results);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/favorito/insert', async(req, res) => {
    try {
        let results = await db.insertFavorito(req.body.idcli, req.body.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/favorito/remove', async(req, res) => {
    try {
        let results = await db.removeFavorito(req.body.idcli, req.body.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/checkFavorito', async(req, res) => {

    try {
        let results = await db.checkFavorito(req.body.idcli, req.body.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/favorito/insertOrRemove', async(req, res) => {
    try {
        let results = await db.insertOrRemoveFavorito(req.body.idcli, req.body.idpro, req.body.existe);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//LOGIN

app.post('/login/', async(req, res) => {

    try {
        let results = await db.login(req.body);
        res.json(results);
    } catch (error) {

        res.status(401).send(error);
    }

});

//OTHER

app.listen('3000', () => {
    console.log(`Server is running on port 3000`);
});
