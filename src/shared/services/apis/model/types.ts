

export type TChocadeira = {
    id?: number;
    codigo?: string;
    marca?: string;
    capacidadeTotal?: number;
}

export type TRaca = {
    id?: number;
    nome?: string;
    descricao?: string;
}

export type TIncubacao = {
    id?: number;
    chocadeira?: TChocadeira;
    dataIncubacao?: Date;
    dataOvoscopia?: Date;
    dataEclosao?: Date;
    itens?: TItemIncubacao[];
}

export type TItemIncubacao = {
    id?: number;
    raca?: TRaca;
    quantidade?: number;
}

export type TCadastroIncubacao = {

    idChocadeira?: number;
    inicio?: Date;
    itens?: TItemIncubacaoCadastro[];
}

export type TItemIncubacaoCadastro = {
    idRaca?: number;
    quantidade?: number;
}


export type TFiltroIncubacao = {
    idChocadeira?: number;
    inicio?: Date;
    idRaca?: number;
}
