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

//VALIDATE TOKEN

function validateToken(req, res){

    var user;

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null){
        res.status(401).send("Efetue login para poder aceder a esta funcionalidade");
        return;
    }

    jwt.verify(token, 'tokenkey', (error, u) => {

        if(error){
            console.log(error);
            res.status(403).send("A sua sessão expirou. Faça login novamente.");
            return;
        } else {
            user = u;
        }
    });

    return user;
}

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

sirtp2db.getProdutoNomes = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT nome FROM produto`,(err, results) => {
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

sirtp2db.displayProdutoCategoriaAndPlataforma = (plataforma, categoria) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE plataforma = ? AND categoria = ? AND stock <> 0 AND ativo <> 0`, [plataforma, categoria],(err, results) => {
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

sirtp2db.updateDadosProduto = (body, id) => {
    console.log(body);
    return new Promise((resolve,reject) => {
        var nomeAtual = "";
        var categoriaAtual = "";
        var precoAtual = "";
        var stockAtual = "";
        var descricaoAtual = "";
        var plataformaAtual = "";
        var consolaAtual = "";
        var classificacaoAtual = "";
        var generoAtual = "";
        var ativoAtual = "";
        var imagemAtual = "";
        var imagemAtualDest = "";
        var idAtual = "";
        

        pool.query(`SELECT * FROM produto WHERE id = ?`, [id],(err, results) => {
            if(err) {
                reject(err);
            }
            else {
                if(body[0][1] != null && body[0][1] != '' 
                    && body[1][1] != null && body[1][1] != '' 
                    && body[2][1] != null && body[2][1] != '' 
                    && body[3][1] != null && body[3][1] != '' 
                    && body[4][1] != null && body[4][1] != '' 
                    && body[5][1] != null && body[5][1] != '' 
                    && body[6][1] != null && body[6][1] != '' 
                    && body[7][1] != null && body[7][1] != '' 
                    && body[8][1] != null && body[8][1] != '' 
                    && body[9][1] != null && body[9][1] != '' 
                    ) {
                    reject("Nao foram passados parametros para atualizar");
                }
                nomeAtual = results[0].nome;
                categoriaAtual = results[0].categoria;
                precoAtual = results[0].preco;
                stockAtual = results[0].stock;
                descricaoAtual = results[0].descricao;
                plataformaAtual = results[0].plataforma;
                consolaAtual = results[0].consola;
                classificacaoAtual = results[0].classificacao;
                generoAtual = results[0].genero;
                ativoAtual = results[0].ativo;
                imagemAtual = results[0].imagem;
                imagemAtualDest = results[0].imagemDestaque;
                idAtual = id;
                console.log("ATIVO body: "+body[7][1]);
                console.log("ATIVO Atual: "+ativoAtual);
                if(body[0][1] != null && body[0][1] != '') {
                    nomeAtual = body[0][1];
                }
                if(body[1][1] != null && body[1][1] != '') {
                    plataformaAtual = body[1][1];
                }
                if(body[2][1] != null && body[2][1] != '') {
                    generoAtual = body[2][1];
                }
                if(body[3][1] != null && body[3][1] != '') {
                    consolaAtual = body[3][1];
                }
                if(body[4][1] != null && body[4][1] != '') {
                    classificacaoAtual = body[4][1];
                }
                if(body[5][1] != null && body[5][1] != '') {
                    stockAtual = body[5][1];
                }
                if(body[6][1] != null && body[6][1] != '') {
                    precoAtual = body[6][1];
                }
                if(body[7][1] != ativoAtual) {
                    console.log("CHECK");
                    ativoAtual = body[7][1];
                    console.log(ativoAtual+"ei")
                }
                if(body[8][1] != null && body[8][1] != '') {
                    categoriaAtual = body[8][1];
                }
                if(body[9][1] != null && body[9][1] != '') {
                    descricaoAtual = body[9][1];
                }
                
                console.log("ATIVOAtual After: "+ativoAtual);
                
                 updateDados(nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual, 
                    consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, imagemAtualDest, idAtual).then((res) => {
                        
                    resolve(res);
                }); 
            }
        });
    });

    async function updateDados(nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual, 
        consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, imagemAtualDest, idAtual) {
        return await new Promise((resolve,reject) => {
            pool.query(`UPDATE produto SET nome = ?, categoria = ?, preco = ?, stock = ?, descricao = ?, plataforma = ?,
                         consola = ?, classificacao = ?, genero = ?, ativo = ?, imagem = ?, imagemDestaque = ? WHERE id = ?`,
                         [nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual,
                         consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, imagemAtualDest, idAtual],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

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

sirtp2db.insertProduto = (nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, imagemDestaque, ativo) => {

    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO produto (nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, imagemDestaque, ativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [nome, categoria, preco, stock, descricao, plataforma, consola, classificacao, genero, imagem, imagemDestaque, ativo],(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

sirtp2db.getProdutoComMaiorAvaliacao = () => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE classificacao = (SELECT MAX(classificacao) FROM produto);`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sirtp2db.getProdutosWithThisCharacter = (nome) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM produto WHERE nome LIKE '${nome}%';`,(err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//QUERIES CLIENTE

sirtp2db.cliente = (req,res) => {
    var user = validateToken(req,res);
    if(user) {
        return new Promise((resolve,reject) => {
            pool.query(`SELECT * FROM cliente WHERE username = ?`, [user.username],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

};

sirtp2db.allCliente = () => {   
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente`,(err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results);
        });
    });
};

sirtp2db.allEmails = () => {   
    return new Promise((resolve,reject) => {
        pool.query(`SELECT email FROM cliente`,(err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results);
        });
    });
};

sirtp2db.oneCliente = (username) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente WHERE username = ?`, [username],(err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results[0]);
        });
    });
};

sirtp2db.updateDadosCliente = (body, username) => {
    return new Promise((resolve,reject) => {
        var nomeAtual = "";
        var emailAtual = "";
        var passwordAtual = "";
        var usernameAtual = "";
        pool.query(`SELECT * FROM cliente WHERE username = ?`, [username],(err, results) => {
            if(err) {
                reject(err);
            }
            else {
                
                nomeAtual = results[0].nome;
                emailAtual = results[0].email;
                passwordAtual = results[0].password;
                usernameAtual = username;

                if(body.nome != null && body.nome != '') {
                    nomeAtual = body.nome;
                }
                if(body.email != null && body.email != '') {
                    emailAtual = body.email;
                }
                if(body.password != null && body.password != '') {
                    passwordAtual = body.password;
                }
                updateDados(nomeAtual, emailAtual, passwordAtual, usernameAtual).then((res) => {
                    resolve("Dados Atualizados Com Sucesso");
                }); 
            }
        });
    });

    async function updateDados(nomeAtual, emailAtual, passwordAtual, usernameAtual) {
        return await new Promise((resolve,reject) => {
            pool.query(`UPDATE cliente SET password = ?, nome = ?, email = ? WHERE username = ?`, [passwordAtual, nomeAtual, emailAtual, usernameAtual],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

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
                reject(err);
            }
            else {
                atualizarStock(idpro).then((res) => {

                    getEmail(idcli).then((res) => {

                        resolve({mensagem: `Compra efetuada! Recibo enviado para ${res.email}.`}); 
                    }) 
                }) 

               

            }
        });
    });

    async function atualizarStock(idpro) {
        return await new Promise((resolve,reject) => {
            pool.query(`UPDATE produto SET stock = stock - 1 WHERE id = ?`, [idpro],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }



    async function getEmail(idcli) {
        return await new Promise((resolve,reject) => {
            pool.query(`SELECT email FROM cliente WHERE id = ?`, [idcli],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }

};

/////////////////////////

sirtp2db.allAvaliacaoFromProduto = (idpro) => {
    return new Promise((resolve,reject) => {
        var listaAvaliacoesOriginal = [];
        var listaAvaliacoesNova = [];
        pool.query(`SELECT * FROM avaliacao WHERE idpro = ?`, [idpro],(err, results) => {
            if(err) {
                reject(err);
            }
            else {      
                listaAvaliacoesOriginal = results;
                getNomes(results).then((res) => {
                    
                    var i = 0;
                    for(var reg of res) {
                        listaAvaliacoesNova.push({avaliacao : listaAvaliacoesOriginal[i], username : reg.username})
                        i = i + 1;
                    }
                    resolve(listaAvaliacoesNova);
                
                }) 
            }     
        });
    });

    async function getNomes(results) {
        return await new Promise((resolve,reject) => {
            var arrayAll = [];
            for(var cliente of results) {  
                var promise = new Promise((resolve,reject) => {
                    pool.query(`SELECT username FROM cliente WHERE id = ?`, [cliente.idcli],(err, res) => {
                        if(err) {
                             reject(err);
                        }else {
                            resolve(res);
                        }  
                    });
                });
                arrayAll.push(promise);
            }
            var final = [];
            Promise.all(arrayAll).then((array) => {
            array.forEach((singleArray) => {
                singleArray.forEach((produto) => {              
                    final.push(produto);
                });
            });
                
            resolve(final);
            });  
        });
    }
};

/////////////////////////

sirtp2db.allDetailsFromCompra = (idcli) => {
    return new Promise((resolve,reject) => {
        var listaProdutosOriginal = [];
        var listaProdutosNova = [];
        var datas = [];
        pool.query(`SELECT * FROM compra WHERE idcli = ?`, [idcli],(err, results) => {
            if(err) {
                reject(err);
            }
            else {   
                if (Array.isArray(datas) && !datas.length) {
                    // array exists and is not empty
                    getDatas(idcli).then((res) => {
                        datas = res;
                    }); 
                }
                
                getProds(results).then((res) => {
                    listaProdutosOriginal = res;
                    var i = 0;
                    for(var reg of listaProdutosOriginal) {
                        listaProdutosNova.push({produto : reg, data : datas[i].data})
                        i = i + 1;
                    }
                    resolve(listaProdutosNova);
                });   
            }
        });
    });

    async function getDatas(idcli) {
        return await new Promise((resolve,reject) => {
            pool.query(`SELECT data FROM compra WHERE idcli = ?`, [idcli],(err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    async function getProds(res) {
        return await new Promise((resolve,reject) => {
            var arrayAll = [];
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
                arrayAll.push(promise);
            }
            
            var final = [];
            Promise.all(arrayAll).then((array) => {
                array.forEach((singleArray) => {
                    singleArray.forEach((produto) => {              
                        final.push(produto);
                    });
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

sirtp2db.insertAvaliacao = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`INSERT INTO avaliacao (idcli, idpro, classificacao, comentario) VALUES (?, ?, ?, ?)`, [body.idcli, body.idpro, body.classificacao, body.comentario],(err, results) => {
            if(err) {
                reject(err);
            }
            resolve({ mensagem: `Avaliação inserida!`});
        });
    });
};

sirtp2db.removeAvaliacao = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`DELETE FROM avaliacao WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
            if(err) {
                reject(err);
            }
            resolve({ mensagem: `Avaliação removida!`});
        });
    });
};
/*
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
*/
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
                getProdutos(results).then((res) => {
                    resolve(res);
                })   
            }
        });
    });

    async function getProdutos(res) {
        return await new Promise((resolve,reject) => {
            var arrayAll = [];
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
                arrayAll.push(promise);
            }
            var final = [];
            Promise.all(arrayAll).then((array) => {
                array.forEach((singleArray) => {
                    singleArray.forEach((produto) => {              
                        final.push(produto);
                    });
                });
                
                resolve(final);
            });
        });
    }

};

sirtp2db.insertOrRemoveFavorito = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM favorito WHERE idcli = ? AND idpro = ?`, [body.idcli, body.idpro],(err, results) => {
            if(err) {
                reject(err);
            }
            if(results.length < 1) {   
                create(body).then((res) => {
                    resolve({mensagem: "Favorito Inserido"}); 
                })                                    
            } 
            else{
                destroy(body).then((res) => {
                    resolve({mensagem: "Favorito Removido"}); 
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

sirtp2db.login = (body) => {
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
                                'tokenkey',
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
                        'tokenkey',
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

//REGISTAR

sirtp2db.registarCliente = (body) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM cliente where username = ? OR email = ?`,[body.username, body.email],(err, results) => {
                if(err){
                    reject(err);
                }
                if(results.length < 1) {
                    if(body.username == "admin") {
                        reject({ mensagem: 'Nome de usuario indisponivel'});
                    }
                    if(body.email == "admin@ipvc.pt") {
                        reject({ mensagem: 'Email indisponivel'});
                    }
                    if(body.password != body.passwordConf) {
                        reject({ mensagem: 'Password e confirmação não coincidem'});
                    }
                    pool.query(`INSERT INTO cliente (username,password,nome,email) values (?,?,?,?)`,[body.username, body.password, body.nome, body.email],(err, results) => { 
                        if(err){
                            reject(err);
                        }

                        resolve({ mensagem: `Utilizador ${body.username} registado com sucesso`});
                    });

                }
                else {
                    reject({ mensagem: 'Ja existe esse utilizador ou email'});
                }
        });
    });
};

module.exports = sirtp2db;