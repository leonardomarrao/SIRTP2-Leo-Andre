//alterei essa linha de codigo
const mysql = require('mysql');

const jwt = require('jsonwebtoken');

const pool = mysql.createPool({
    password: '',
    user: 'root',
    database: 'sir2',
    host: 'localhost',
    port: '3306'
});

let sirtp2db = {};

//QUERIES PRODUTO

sirtp2db.allProduto = () => {
    
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoAvailable = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE stock <> 0 AND ativo <> 0`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoPlataforma = (plataforma) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE plataforma = ? AND stock <> 0 AND ativo <> 0`, [plataforma],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoPlataformaAndGenero = (plataforma, genero) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE plataforma = ? AND genero = ? AND stock <> 0 AND ativo <> 0`, [plataforma, genero],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoPlataformaAndCategoria = (plataforma, categoria) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE plataforma = ? AND categoria = ? AND stock <> 0 AND ativo <> 0`, [plataforma, categoria],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoConsola = (consola) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE consola = ? AND stock <> 0 AND ativo <> 0`, [consola],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayGeneros = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT DISTINCT genero FROM produto`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoCategoria = (categoria) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE categoria = ? AND stock <> 0 AND ativo <> 0`, [categoria],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoClassificacao = (classificacao) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE classificacao = ? AND stock <> 0 AND ativo <> 0`, [classificacao],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.displayProdutoGenero = (genero) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE genero = ? AND stock <> 0 AND ativo <> 0`, [genero],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.oneProduto = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.updatePrecoProduto = (preco, id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE produto SET preco = ? WHERE id = ?`, [preco, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateStockProduto = (stock, id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE produto SET stock = ? WHERE id = ?`, [stock, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateStockProdutoAfterSale = (id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE produto SET stock = stock - 1 WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateClassificacaoProduto = (classificacao, id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE produto SET classificacao = ? WHERE id = ?`, [classificacao, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateAtivoProduto = (ativo, id) => {
    
    return new Promise((resolve,reject) => {
        pool.query(`UPDATE produto SET ativo = ? WHERE id = ?`, [ativo, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.insertProduto = (nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, ativo) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO produto (nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, ativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, ativo],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

//QUERIES CLIENTE

sirtp2db.allCliente = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.oneCliente = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.insertCliente = (username, password, nome, email) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO cliente (username, password, nome, email) VALUES (?, ?, ?, ?)`, [username, password, nome, email],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateNomeCliente = (nome, id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE cliente SET nome = ? WHERE id = ?`, [nome, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.updateTesteCliente = (password, nome, email, id) => {

    return new Promise((resolve,reject) => {
        pool.query(`UPDATE cliente SET password = ?, nome = ?, email = ? WHERE id = ?`, [password, nome, email, id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

//QUERIES ADMIN

sirtp2db.allAdmin = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM admin`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//QUERIES COMPRA

sirtp2db.allCompra = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM compra`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.allCompraFromCliente = (idcli) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM compra WHERE idcli = ?`, [idcli],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.oneCompra = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM compra WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.insertCompra = (valor, data, idcli, idpro) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO compra (valor, data, idcli, idpro) VALUES (?, ?, ?, ?)`, [valor, data, idcli, idpro],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.allDetailsFromCompra = (idcli) => {
    return new Promise((resolve,reject) => {
        var listaProdutosOriginal = [];
        var listaProdutosNova = [];
        pool.query(`SELECT * FROM compra WHERE idcli = ?`, [idcli],(err, results) => {
            if(err) {
                reject(err);
            }
            else {       
                getProds(results).then((res) => {
                    resolve(res);
                })   
            }
            /*
            var indice = listaProdutosOriginal.length; 

            while(indice != 0) {
                listaProdutosNova.push(listaProdutosOriginal[indice-1][0]);
                indice = indice -1;
            
            }
            resolve(listaProdutosOriginal);
            */
        });
    });

    async function getProds(res) {
        return await new Promise((resolve,reject) => {
            var array = [];
            for(var produto of res) {  
                var promise = new Promise((resolve,reject) => {
                    pool.query(`SELECT * FROM produto WHERE id = ?`, [produto.idpro],(err, res) => {
                        if(err) {
                             reject(err);
                        }else {
                            resolve(res);
                        }  
                    });
                });
                array.push(promise);
            }
            var final = [];
            Promise.all(array).then((produto) => {
                produto.forEach((rogerio) => {
                    final.push(rogerio);
                });
                resolve(final);
            });
        });
    }
};

//QUERIES AVALICAO

sirtp2db.allAvaliacao = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM avaliacao`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.oneAvaliacao = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM avaliacao WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.insertAvaliacao = (idcli, idpro, classificacao, comentario) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO avaliacao (idcli, idpro, classificacao, comentario) VALUES (?, ?, ?, ?)`, [idcli, idpro, classificacao, comentario],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.removeAvaliacao = (idcli, idpro) => {

    return new Promise((resolve,reject) => {
        pool.query(`DELETE FROM avaliacao WHERE idcli = ? AND idpro = ?`, [idcli, idpro],(err, results) => {
            if(err) {
                return reject(err);
            }   
            return resolve(results[0]);
        });
    });

};

sirtp2db.insertOrRemoveAvaliacao = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM avaliacao WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
            if(err) {
                reject(err);
            }
            if(results.length < 1) {   
                create(body).then((res) => {
                    resolve("Avaliação Inserida"); 
                })                                    
            } 
            else{
                destroy(body).then((res) => {
                    resolve("Avaliação Removida"); 
                })
            }
        });
    });

    async function create(body) {
        return await new Promise((resolve,reject) => {
            pool.query(`INSERT INTO avaliacao (idcli, idpro, classificacao, comentario) VALUES (?, ?, ?, ?)`, [body.idcli, body.idpro, body.classificacao, body.comentario],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    };

    async function destroy(body) {
        return await new Promise((resolve,reject) => {
            pool.query(`DELETE FROM avaliacao WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    };
};

//QUERIES FAVORITO

sirtp2db.allFavorito = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.oneFavorito = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito WHERE id = ?`, [id],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.allFavoritoFromCliente = (idcli) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito WHERE idcli = ?`, [idcli],(err, results) => {
            if(err) {
                 reject(err);
            }
            else {       
                teste(results).then((res) => {
                    resolve(res);
                })   
            }
        });
    });

    async function teste(res) {
        return await new Promise((resolve,reject) => {
            var array = [];
            for(var produto of res) {  
                var promise = new Promise((resolve,reject) => {
                    pool.query(`SELECT * FROM produto WHERE id = ?`, [produto.idpro],(err, res) => {
                        if(err) {
                             reject(err);
                        }else {
                            resolve(res);
                        }  
                    });
                });
                array.push(promise);
            }
            var final = [];
            Promise.all(array).then((produto) => {
                produto.forEach((rogerio) => {
                    final.push(rogerio);
                });
                resolve(final);
            });
        });
    }

};
/*
sirtp2db.insertFavorito = (idcli, idpro) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO favorito (idcli, idpro) VALUES (?, ?)`, [idcli, idpro],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.removeFavorito = (idcli, idpro) => {

    return new Promise((resolve,reject) => {
        pool.query(`DELETE FROM favorito WHERE idcli = ? AND idpro = ?`, [idcli, idpro],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sirtp2db.checkFavorito = (idcli, idpro) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito WHERE idcli = ? AND idpro = ?`, [idcli, idpro],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};
*/

sirtp2db.insertOrRemoveFavorito = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
            if(err) {
                reject(err);
            }
            if(results.length < 1) {   
                create(body).then((res) => {
                    resolve("Favorito Inserido"); 
                })                                    
            } 
            else{
                destroy(body).then((res) => {
                    resolve("Favorito Removido"); 
                })
            }
        });
    });

    async function create(body) {
        return await new Promise((resolve,reject) => {
            pool.query(`INSERT INTO favorito (idcli, idpro) VALUES (?, ?)`, [body.idcli, body.idpro],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    };

    async function destroy(body) {
        return await new Promise((resolve,reject) => {
            pool.query(`DELETE FROM favorito WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    };
};

//LOGIN

sirtp2db.loginTeste = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente where username = ?`,[body.username],(err, results) => {
                if(err){
                    reject(err);
                }
                if(results.length < 1) {   
                    checkAdm(body).then((res) => {
                        if(res.length < 1) {   
                            reject({ mensagem: 'Falha na autenticação'});                                    
                        } else{
                            if(body.password == res[0].password) {
                                const token = jwt.sign({
                                    id: res[0].id,
                                    username: res[0].username
                                },
                                'hahaxd',
                                {
                                    expiresIn: "5h"
                                });                     
                                resolve({                           
                                    mensagem: 'Autenticado com sucesso',
                                    token: token                       
                                });
                            } 
                            reject({ mensagem: 'Falha na autenticação'});
                        }
                    })                                      
                }
                else {
                    if(body.password == results[0].password) {
                        const token = jwt.sign({
                            id: results[0].id,
                            username: results[0].username
                        },
                        'hahaxd',
                        {
                            expiresIn: "5h"
                        });                     
                        return resolve({                           
                            mensagem: 'Autenticado com sucesso',
                            token: token                       
                        });
                    } 
                    return reject({ mensagem: 'Falha na autenticação'});
                }    
        });
    });

    async function checkAdm(res) {
        return await new Promise((resolve,reject) => {
            pool.query(`SELECT * FROM admin WHERE username = ?`, [res.username],(err, res) => {
                if(err) {
                    reject(err);
                }
                if(res.length < 1) {   
                    reject({ mensagem: 'Falha na autenticação'});                                    
                }
                resolve(res);  
            }); 
        });
    }
};

sirtp2db.login = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente where username = ?`,[body.username],(err, results) => {
                if(err){
                    reject(err);
                }
                if(results.length < 1) {                   
                    reject({ mensagem: 'Falha na autenticação'});                 
                }
                else {
                    if(body.password == results[0].password) {
                        const token = jwt.sign({
                            id: results[0].id,
                            username: results[0].username
                        },
                        'hahaxd',
                        {
                            expiresIn: "5h"
                        });                     
                        resolve({                           
                            mensagem: 'Autenticado com sucesso',
                            token: token                       
                        });
                    } 
                    reject({ mensagem: 'Falha na autenticação'});
                }    
        });
    });
};

module.exports = sirtp2db;