import * as axios from "axios";
import os from "os";

const port = process.env.PORT || 9000;
let baseURL = '/api/';

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
    async getIssues(jiraIssueKey) {
        const response = await instance.get('todos', {params: {issue_key: jiraIssueKey}});
        console.log(process.env.NODE_ENV);
        return response.data;
    },
    addIssue(title, jiraIssueKey) {
        return instance.post('todos', {title: title, issue_key: jiraIssueKey})
    },
    deleteIssue(id) {
        return instance.delete(`todos/${id}`)
    },
    toggleCompleteStatus(id, iscomplete) {
        return instance.put(`todos/${id}`, {iscomplete: iscomplete})
    },
}

export default issueAPI