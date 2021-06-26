import Repository, { baseUrl, serializeQuery } from './Repository';

class OrderRepository {

    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        console.log(`/orders?${serializeQuery(params)}`);

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
        payload : integer


       */
        console.log(`${baseUrl}/orders/${payload}`) ;
        const response = await Repository.get(`${baseUrl}/orders/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }


    async getOrdersCountByDate(){
        let today = new Date();
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        let dd = String(tomorrow.getDate()).padStart(2, '0');
        let mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = tomorrow.getFullYear();


        const thisDay = yyyy + '-' + mm + '-' + dd;
        const thisMonthFirstDate = `${yyyy}-${mm}-01`
        const response = await Repository.get(`${baseUrl}/orders/?created_at_gte=${thisMonthFirstDate}&created_at_lte=${thisDay}`) .then(response => {
          return response.data}).catch(error => ({ error: JSON.stringify(error) }));
            return response;


    }



}

export default new OrderRepository();
