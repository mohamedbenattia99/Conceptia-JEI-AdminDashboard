import Repository, { baseUrl } from './Repository';

class CollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getPromotions() {


        const response = await Repository.get(`${baseUrl}/promotions`)
            .then(response => {
                console.log(response.data)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }
    async getBanners() {


        const response = await Repository.get(`${baseUrl}/banners`)
            .then(response => {
                console.log(response.data)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getCategoriesBySlug(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${query}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsBySlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/collections/slug?=${slug}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new CollectionRepository();
