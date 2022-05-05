

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

export const ChocadeiraService = {
    getAll, getById
}