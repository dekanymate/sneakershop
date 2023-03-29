import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default {

    //BRAND
    getBrands() {
        return httpClient.get('/brands');
    },
    postBrand(brand) {
        return httpClient.post('/new-brand', brand);
    },
    deleteBrand(id) {
        return httpClient.delete('/delete-brand', id);
    },

    //USER
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
        return httpClient.delete('/delete-user', id);
    },

    //SNEAKER

    postSneaker(sneaker) {
        return httpClient.post('/new-sneaker', sneaker);
    },

    getSneakers() {
        return httpClient.get('/sneakers');
    },

    updateSneaker(){
        return httpClient.put('/update-sneaker', sneaker);
    },
    deleteSneaker(id){
        return httpClient.delete('/delete-sneaker', id)
    },
    
    login(){
        return httpClient.post('/login');
    },

    getStocks(){
        return httpClient.get('/stocks');
    },

    updateStocks(id){
        return httpClient.put('/update-stock/{id}', id);        
    },
}