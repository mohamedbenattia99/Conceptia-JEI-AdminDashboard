import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        console.log(`${baseUrl}/products?${serializeQuery(params)}`);

        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(params)}`
        )
            .then(response => {
                console.log(response)
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


    async getProductBrands() {

        const response = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                console.log(response)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }


    async getTotalRecords() {
        const response = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }



    async getProductsByCategory(payload) {
       /*
        payload ='slug_name'
       */

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

export default new ProductRepository();
