import Repository, { baseUrl, serializeQuery } from './Repository';

class OrderRepository {

    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        // used for pagination & search by keyword
        // params  = {
//             _start: number,
//             _limit: number,
//         }
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
       /*
        payload {
            id : number
        }

       */
        const reponse = await Repository.get(`${baseUrl}/orders/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }




}

export default new OrderRepository();
