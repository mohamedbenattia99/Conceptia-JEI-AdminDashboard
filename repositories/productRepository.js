import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        console.log(`/products?${serializeQuery(params)}`);

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
