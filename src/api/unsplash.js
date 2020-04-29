import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 9yxGmdfuYgdp9NcOKUS7_I0UztgKO6XwFGLvaWmNJoo'
    }
});