import axios from "axios";
import os from "os";
import { DataType } from "../redux/Types";

const port = process.env.PORT || 9000;
let baseURL: string = '/api/';

if (process.env.NODE_ENV !== 'production' ) {
    baseURL = 'http://' + os.hostname() + ':' + port + baseURL
}

const instance = axios.create({
                baseURL: baseURL,
                headers: {
                    "Content-Type": "application/json"
                }
            });

const issueAPI = {
    async getIssues() {
        const response = await instance.get<DataType>('todos');
        return response.data;
    },
    addIssue(title: string) {
        return instance.post<string>('todos', {title: title})
    },
    deleteIssue(id: number) {
        return instance.delete<string>(`todos/${id}`)
    },
    toggleCompleteStatus(id: number, iscomplete: boolean) {
        return instance.put<string>(`todos/${id}`, {iscomplete: iscomplete})
    },
}

export default issueAPI