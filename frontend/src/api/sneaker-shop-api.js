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

    updateUser(user) {
        return httpClient.put('/update-user', user);
    },

    deleteUser(id) {
        return httpClient.post('/delete-user', id);
    },

    postSneaker(sneaker) {
        return httpClient.post('/new-sneaker', sneaker);
    },

    getSneakers() {
        return httpClient.get('sneakers');
    }
}