import { Router } from "express";
import { Produto } from "../models";

import { listPage1 as assinante1ProdutosPage1 } from "./utils/assinante1/listPage1";
import { listPage2 as assinante1ProdutosPage2 } from "./utils/assinante1/listPage2";
import { listPage3 as assinante1ProdutosPage3 } from "./utils/assinante1/listPage3";

import { listPage1 as assinante2ProdutosPage1 } from "./utils/assinante2/listPage1";
import { listPage2 as assinante2ProdutosPage2 } from "./utils/assinante2/listPage2";
import { listPage3 as assinante2ProdutosPage3 } from "./utils/assinante2/listPage3";

import { configPrecoAssinante1 } from "./utils/assinante1/tipoPreco";
import { configPrecoAssinante2 } from "./utils/assinante2/tipoPreco";


import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

export const produto = new Router();

produto.get("/", async (req, res) => {
  // const { page = 1 } = req.query;
  // const list = await Produto.query(qb =>
  //   qb.orderBy("descricao", "asc")
  // ).fetchPage({
  //   withRelated: ["codigosAuxiliares", "preco"],
  //   page,
  //   pageSize: 600
  // });

  var list = [];
  var configPreco;

  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }

  if (req.headers.assinante == "joao") {
    list = [
      ...assinante1ProdutosPage1,
      ...assinante1ProdutosPage2,
      ...assinante1ProdutosPage3
    ];
    configPreco = configPrecoAssinante1;
  } else if (req.headers.assinante == "maria") {
    list = [
      ...assinante2ProdutosPage1,
      ...assinante2ProdutosPage2,
      ...assinante2ProdutosPage3
    ];
    configPreco = configPrecoAssinante2;
  }

  if (req.headers.assinante == "joao") {

    for (var i = 0; i < list.length; i++) {
      let itemLista = list[i];
      var preco = itemLista.preco;
      console.log(">>>>>>>> preco:" + preco.toString());
      list[i].precos = [
        {
          id: preco.id,
          valor: preco.preco1.toPrecision(2),
          oferta: preco.preco_oferta1 > 0 ? true : false,
          venda: preco.preco_venda1 > 0 ? true : false,
          loja_id: 1,
          produto_id: itemLista.id,
          tipoPreco: configPreco[0]
        },
        {
          id: preco.id * 2,
          valor: (preco.preco1 * 2.2).toPrecision(2),
          oferta: preco.preco_oferta2 > 0 ? true : false,
          venda: preco.preco_venda2 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[1]
        },
        {
          id: preco.id * 3,
          valor: (preco.preco1 * 3.3).toPrecision(2),
          oferta: preco.preco_oferta3 > 0 ? true : false,
          venda: preco.preco_venda3 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[2]
        },
        {
          id: preco.id * 4,
          valor: (preco.preco1 * 1.4).toPrecision(2),
          oferta: preco.preco_oferta1 > 0 ? true : false,
          venda: preco.preco_venda1 > 0 ? true : false,
          loja_id: 2,
          produto_id: itemLista.id,
          tipoPreco: configPreco[0]
        },
        {
          id: preco.id * 5,
          valor: (preco.preco1 * 2.5).toPrecision(2),
          oferta: preco.preco_oferta2 > 0 ? true : false,
          venda: preco.preco_venda2 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 2,
          tipoPreco: configPreco[1]
        },
        {
          id: preco.id * 6,
          valor: (preco.preco1 * 3.6).toPrecision(2),
          oferta: preco.preco_oferta3 > 0 ? true : false,
          venda: preco.preco_venda3 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 2,
          tipoPreco: configPreco[2]
        },
        {
          id: preco.id * 7,
          valor: preco.preco1.toPrecision(2.7),
          oferta: preco.preco_oferta1 > 0 ? true : false,
          venda: preco.preco_venda1 > 0 ? true : false,
          loja_id: 3,
          produto_id: itemLista.id,
          tipoPreco: configPreco[0]
        },
        {
          id: preco.id * 8,
          valor: (preco.preco1 * 2.8).toPrecision(2),
          oferta: preco.preco_oferta2 > 0 ? true : false,
          venda: preco.preco_venda2 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 3,
          tipoPreco: configPreco[1]
        },
        {
          id: preco.id * 9,
          valor: (preco.preco1 * 3.9).toPrecision(2),
          oferta: preco.preco_oferta3 > 0 ? true : false,
          venda: preco.preco_venda3 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 3,
          tipoPreco: configPreco[2]
        }
      ];

      delete itemLista.preco;

    }

  } else if (req.headers.assinante == "maria") {
    for (var i = 0; i < list.length; i++) {
      let itemLista = list[i];
      const preco = itemLista.preco;

      list[i].precos = [
        {
          id: preco.id,
          valor: preco.preco1.toPrecision(2),
          oferta: preco.preco_oferta1 > 0 ? true : false,
          venda: preco.preco_venda1 > 0 ? true : false,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[0]
        }
      ];
      delete itemLista.preco;
    }
  }
  createFile(list);
  res.send(list);

});

function createFile(list) {
  // include node fs module
  var fs = require('fs');
  var exp = JSON.stringify(list);
  // writeFile function with filename, content and callback function
  fs.writeFile('produtos.js', 'export const produtos = ' + exp, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}
