"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return null;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return null;
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('lógica getALL');
        return [new Array];
    };
    return ConcessionariaDao;
}());
