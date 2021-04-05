import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepositoryARevisiter {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }



    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getTotalRecords() {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

   /*to work on */ async getProductsByProductNumber(payload) {
        const reponse = await Repository.get(`${baseUrl}/products/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductByPriceRange (priceRange){
       // to fill up
    }

    async getProductByName(name){
        // to fill up
    }

    async getProductsByCategory(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?slug=${payload}`
        )
            .then(response => {
                return response.data[0].products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }






}

export default new ProductRepositoryARevisiter();
