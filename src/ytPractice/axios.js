import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const instance = axios.create({
    baseURL: url,
});


// in this example, the url will be
// instance.get('/test')
//https://jsonplaceholder.typicode.com/posts/test


export default instance;