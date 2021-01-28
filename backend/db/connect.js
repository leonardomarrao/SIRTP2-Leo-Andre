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

sirtp2db.updateDadosProduto = (body) => {
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
        var idAtual = "";

        pool.query(`SELECT * FROM produto WHERE id = ?`, [body.id],(err, results) => {
            if(err) {
                reject(err);
            }
            else {
                if(body.nome != null && body.nome != '' 
                    && body.categoria != null && body.categoria != '' 
                    && body.preco != null && body.preco != '' 
                    && body.stock != null && body.stock != '' 
                    && body.descricao != null && body.descricao != '' 
                    && body.plataforma != null && body.plataforma != '' 
                    && body.consola != null && body.consola != '' 
                    && body.classificacao != null && body.classificacao != '' 
                    && body.genero != null && body.genero != '' 
                    && body.ativo != null && body.ativo != '' 
                    && body.imagem != null && body.imagem != '') {
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
                idAtual = body.id;

                if(body.nome != null && body.nome != '') {
                    nomeAtual = body.nome;
                }
                if(body.categoria != null && body.categoria != '') {
                    categoriaAtual = body.categoria;
                }
                if(body.preco != null && body.preco != '') {
                    precoAtual = body.preco;
                }
                if(body.stock != null && body.stock != '') {
                    stockAtual = body.stock;
                }
                if(body.descricao != null && body.descricao != '') {
                    descricaoAtual = body.descricao;
                }
                if(body.plataforma != null && body.plataforma != '') {
                    plataformaAtual = body.plataforma;
                }
                if(body.consola != null && body.consola != '') {
                    consolaAtual = body.consola;
                }
                if(body.classificacao != null && body.classificacao != '') {
                    classificacaoAtual = body.classificacao;
                }
                if(body.genero != null && body.genero != '') {
                    generoAtual = body.genero;
                }
                if(body.ativo != null && body.ativo != '') {
                    ativoAtual = body.ativo;
                }
                if(body.imagem != null && body.imagem != '') {
                    imagemAtual = body.imagem;
                }

                updateDados(nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual, 
                    consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, idAtual).then((res) => {
                    resolve("Dados Atualizados Com Sucesso");
                }); 
            }
        });
    });

    async function updateDados(nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual, 
        consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, idAtual) {
        return await new Promise((resolve,reject) => {
            pool.query(`UPDATE produto SET nome = ?, categoria = ?, preco = ?, stock = ?, descricao = ?, plataforma = ?,
                         consola = ?, classificacao = ?, genero = ?, ativo = ?, imagem = ? WHERE id = ?`,
                         [nomeAtual, categoriaAtual, precoAtual, stockAtual, descricaoAtual, plataformaAtual,
                         consolaAtual, classificacaoAtual, generoAtual, ativoAtual, imagemAtual, idAtual],(err, results) => {
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
        pool.query(`SELECT * FROM cliente WHERE username = ?`, [user.username],(err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results);
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

sirtp2db.updateDadosCliente = (password, nome, email, id) => {
    return new Promise((resolve,reject) => {
        var nomeAtual = "";
        var emailAtual = "";
        var passwordAtual = "";
        var idAtual = "";
        pool.query(`SELECT * FROM cliente WHERE id = ?`, [id],(err, results) => {
            if(err) {
                reject(err);
            }
            else {
                if(nome != null && nome != '' && email != null && email != '' && password != null && password != '') {
                    reject("Nao foram passados parametros para atualizar");
                }
                nomeAtual = results[0].nome;
                emailAtual = results[0].email;
                passwordAtual = results[0].password;
                idAtual = id;

                if(nome != null && nome != '') {
                    nomeAtual = nome;
                }
                if(email != null && email != '') {
                    emailAtual = email;
                }
                if(password != null && password != '') {
                    passwordAtual = password;
                }

                updateDados(nomeAtual, emailAtual, passwordAtual, idAtual).then((res) => {
                    resolve("Dados Atualizados Com Sucesso");
                }); 
            }
        });
    });

    async function updateDados(nomeAtual, emailAtual, passwordAtual, idAtual) {
        return await new Promise((resolve,reject) => {
            pool.query(`UPDATE cliente SET password = ?, nome = ?, email = ? WHERE id = ?`, [passwordAtual, nomeAtual, emailAtual, idAtual],(err, results) => {
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
                        console.log(datas);
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