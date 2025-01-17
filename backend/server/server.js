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

app.get('/produto/nomes/', async(req, res) => {

    try {
        let results = await db.getProdutoNomes();
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

app.get('/produto/display/plataformagenero/:plataforma/:genero', async(req, res) => {

    try {
        let results = await db.displayProdutoPlataformaAndGenero(req.params.plataforma, req.params.genero);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/produto/display/plataforma&categoria', async(req, res) => {

    try {
        let results = await db.displayProdutoPlataformaAndCategoria(req.body.plataforma, req.body.categoria);
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

app.get('/produto/display/plataformacategoria/:plataforma/:categoria', async(req, res) => {

    try {
        let results = await db.displayProdutoCategoriaAndPlataforma(req.params.plataforma, req.params.categoria);
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

app.put('/produto/updateDadosProduto/:id', async(req, res) => {
    try {
        let results = await db.updateDadosProduto(req.body, req.params.id);
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

app.post('/produto/insert', async(req, res) => {
    try {
        let results = await db.insertProduto(req.body.nome, req.body.categoria, req.body.preco, req.body.stock, req.body.descricao, req.body.plataforma, req.body.consola, req.body.classificacao, req.body.genero, req.body.imagem, req.body.imagemDestaque, req.body.ativo);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/generos', async(req, res) => {
    try {
        let results = await db.displayGeneros();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/maiorClassificacao', async(req, res) => {

    try {
        let results = await db.getProdutoComMaiorAvaliacao();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/containsName/:nome', async(req, res) => {

    try {
        let results = await db.getProdutosWithThisCharacter(req.params.nome);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

//APP CLIENTE

app.get('/cliente/', async(req, res) => {

    try {
        let results = await db.cliente(req,res);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/allClientes/', async(req, res) => {

    try {
        let results = await db.allCliente();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/allEmails/', async(req, res) => {

    try {
        let results = await db.allEmails();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.get('/cliente/:username', async(req, res) => {

    try {
        let results = await db.oneCliente(req.params.username);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.put('/cliente/updateDados/:username', async(req, res) => {
    try {
        let results = await db.updateDadosCliente(req.body, req.params.username);
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

app.get('/compraDetailsFromCliente/:idcli', async(req, res) => {

    try {
        let results = await db.allDetailsFromCompra(req.params.idcli);
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

app.get('/avaliacao/produto/:idpro', async(req, res) => {

    try {
        let results = await db.allAvaliacaoFromProduto(req.params.idpro);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/avaliacao/insertAvaliacao', async(req, res) => {
    try {
        let results = await db.insertAvaliacao(req.body);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

app.post('/avaliacao/removeAvaliacao', async(req, res) => {
    try {
        let results = await db.removeAvaliacao(req.body);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});
/*
app.post('/avaliacao/insertOrRemoveAva', async(req, res) => {
    try {
        let results = await db.insertOrRemoveAvaliacao(req.body);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});
*/
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

app.post('/favorito/insertOrRemoveFav', async(req, res) => {
    try {
        let results = await db.insertOrRemoveFavorito(req.body);
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

//REGISTAR

app.post('/cliente/registar', async(req, res) => {
    try {
        let results = await db.registarCliente(req.body);
        res.json(results);
    } catch (error) {
        res.status(401).send(error);
    }

});

//OTHER

app.listen('3000', () => {
    console.log(`Server is running on port 3000`);
});
