

export type TChocadeira = {
    id?: number;
    codigo?: string;
    marca?: string;
    capacidadeTotal?: number;
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
    raca?: string;
    quantidade?: number;
}