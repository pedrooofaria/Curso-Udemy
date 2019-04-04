import { DaoInterface } from './DaoInterface'
class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: any): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: any): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): any {
        console.log('lógica delete')
        return null
    }

    selecionar(id: number): any {
        console.log('lógica select')
        return null
    }

    selecionarTodos(): [any] {
        console.log('lógica getALL')
        return [new Array]
    }

}