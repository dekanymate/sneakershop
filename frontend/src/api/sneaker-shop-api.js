import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default {
    getBrands() {
        return httpClient.get('/brands');
    },
    postBrand(brand) {
        return httpClient.post('/new-brand', brand);
    },
    deleteBrand(id) {
        return httpClient.post('/delete-brand', id);
    },
    postUser(user) {
        return httpClient.post('/new-user', user);
    },

    getUsers() {
        return httpClient.get('/users');
    },

    updateUser() {
        return httpClient.put('/users-update')
    }
}