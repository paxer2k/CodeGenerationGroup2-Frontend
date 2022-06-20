import axios from 'axios';

const instance = axios.create( {
    baseURL: 'http://codegengroup2.herokuapp.com/api'
});

export default instance;