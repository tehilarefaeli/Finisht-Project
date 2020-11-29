import React from 'react';
import axios from 'axios';

// export interface RequestData{
//  url:string;
// data:FormData;
// }
export default function BaseRequest(url: string, param?: any) {
    const baseURL = "http://localhost:8080/api/"
    return axios.get(
        `${baseURL}${url}`, {
        params: param
    }
    ).then((res) => {
        console.log(res);
        return res.data;
    })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}