import * as actionType from "../actions/actionType";
import Axios, { AxiosError, AxiosResponse } from "axios";

export const loadUsers = () => {
    return {
        type: actionType.LOAD_USERS,
        users: getUsers()
    }
};

export const getUsers = () => {
    const users = require("../../src/loadUsers.json");
    return users;
}

export const getUsersThroughAxios = () => {
    return Axios.get("../../src/loadUsers.json")
        .then((response: AxiosResponse) => {
            console.log("response from Axios : " + response);
        })
        .catch((error: AxiosError) => {
            console.log("error from Axios : " + error);
        })
}

export const getUsersThroughAxios1 = () => {
    const axios = Axios.create({
        baseURL: "http://localhost:3009"
    });

    return axios.get("/src/loadUsers.json")
        .then((response: AxiosResponse) => {
            console.log("response from Axios 1  : " + response);
        })
        .catch((error: AxiosError) => {
            console.log("error from Axios 1 : " + error);
        })
}

export const getUsersThroughAxios2 = () => {
    const users = require("../../src/loadUsers.json");
    
    return {
        type: actionType.LOAD_USERS,
        data: users
    }
}


