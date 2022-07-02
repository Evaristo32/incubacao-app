

import Api from "../axios-config";
import { TRaca } from "../model/types";

const DOMAIN = 'raca';

const getAll = async (): Promise<TRaca[] | Error> => {
    try {
        const { data } = await Api.get<TRaca[]>(DOMAIN);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar raças.");
    }
};

const getById = async (id: number): Promise<TRaca | Error> => {
    try {
        const { data } = await Api.get<TRaca>(DOMAIN + `/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar buscar raças.");
    }
};

const save = async (raca: TRaca): Promise<number | Error> => {
    try {
        const { data } = await Api.post<number>(DOMAIN, raca);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar cadastrar raças.");
    }
};

const update = async (raca: TRaca): Promise<number | Error> => {
    try {
        const { data } = await Api.put<number>(DOMAIN, raca);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar alterar raças.");
    }
};

const deleteById = async (id: number | undefined): Promise<TRaca | Error> => {
    try {
        const { data } = await Api.delete<TRaca>(DOMAIN + `/${id}`);
        return data;
    } catch (error) {
        return new Error("Problemas ao tentar deletar raças.");
    }
};

export const RacaService = {
    getAll, getById, save, update, deleteById
}