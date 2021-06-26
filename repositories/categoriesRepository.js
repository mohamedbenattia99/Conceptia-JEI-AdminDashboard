import Repository, { baseUrl, serializeQuery } from './Repository';

class CategoriesRepository {

    constructor(callback) {
        this.callback = callback;
    }

    async getProductCategories() {
        const response = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                console.log(response)

                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getTotalCategories() {
        const response = await Repository.get(`${baseUrl}/product-categories/count`)
            .then(response => {
                console.log(response)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }



}

export default new CategoriesRepository();
