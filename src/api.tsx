import axios from "axios";
import { IUser } from "./models/IUser";

const baseUrl = "https://dummyjson.com/"

const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
})

export const userLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<IUser>('auth/login', sendObj)
}
