import axios from "axios";

class RestClient{
    static getRequest= (getUrl:string) => {
       return axios.get(getUrl)
    }
    static PostRequest = (PostUrl:string,Data:string[]) => {
        return axios.post(PostUrl,Data)
    }
}

export default RestClient

