import Repository, { baseUrl, serializeQuery } from './Repository';

class OrderRepositoryARevisiter {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        const reponse = await Repository.get(
            `${baseUrl}/orders?${serializeQuery(params)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }




    async getTotalRecords() {
        const reponse = await Repository.get(`${baseUrl}/orders/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getOrderById(payload) {
        const reponse = await Repository.get(`${baseUrl}/orders/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getOrdersByProduct(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/order-categories?slug=${payload}`
        )
            .then(response => {
                return response.data[0].orders;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getOrdersByDate(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id_in=${item}`;
            } else {
                query = query + `&id_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getOrdersByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/orders?${serializeQuery(payload)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new OrderRepositoryARevisiter();
