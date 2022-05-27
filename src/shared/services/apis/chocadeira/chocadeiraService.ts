

import Api from "../axios-config";
import { TChocadeira } from "../model/types";

const getAll = async (): Promise<TChocadeira[] | Error> => {
    try {
        const { data } = await Api.get<TChocadeira[]>('chocadeira');
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar chocadeiras.");
    }
};

const getById = async (id: number): Promise<TChocadeira | Error> => {
    try {
        const { data } = await Api.get<TChocadeira>(`chocadeira/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar chocadeiras.");
    }
};

const save = async (chocadeira: TChocadeira): Promise<number | Error> => {
    try {
        const { data } = await Api.post<number>(`chocadeira`, chocadeira);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar cadastrar chocadeiras.");
    }
};

const update = async (chocadeira: TChocadeira): Promise<number | Error> => {
    try {
        const { data } = await Api.put<number>(`chocadeira`, chocadeira);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar alterar chocadeiras.");
    }
};

const deleteById = async (id: number | undefined): Promise<TChocadeira | Error> => {
    try {
        const { data } = await Api.delete<TChocadeira>(`chocadeira/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar deletar chocadeiras.");
    }
};

export const ChocadeiraService = {
    getAll, getById, save, update, deleteById
}