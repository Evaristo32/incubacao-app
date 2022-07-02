

import Api from "../axios-config";
import { TCadastroIncubacao, TIncubacao } from "../model/types";

const getAll = async (): Promise<TIncubacao[] | Error> => {
    try {
        const { data } = await Api.get<TIncubacao[]>('incubacao');
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar incubacão.");
    }
};

const getById = async (id: number): Promise<TIncubacao | Error> => {
    try {
        const { data } = await Api.get<TIncubacao>(`incubacao/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar uma incubacão.");
    }
};

const save = async (incubacao: TCadastroIncubacao): Promise<number | Error> => {
    try {
        const { data } = await Api.post<number>(`incubacao`, incubacao);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar cadastrar uma incubacão.");
    }
};

const update = async (incubacao: TIncubacao): Promise<number | Error> => {
    try {
        const { data } = await Api.put<number>(`incubacao`, incubacao);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar alterar uma incubacão.");
    }
};

const deleteById = async (id: number | undefined): Promise<TIncubacao | Error> => {
    try {
        const { data } = await Api.delete<TIncubacao>(`incubacao/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar deletar uma incubacão.");
    }
};

export const IncubacaoService = {
    getAll, getById, save, update, deleteById
}