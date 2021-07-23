import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';

class OrderRepository {

    constructor(callback) {
        this.callback = callback;
    }

   /* async getRecords(params) {
        console.log(`/newsletters?${serializeQuery(params)}`);

        // used for pagination & search by keyword
        // params  = {
//             _start: number,
//             _limit: number,
//         }
        const reponse = await Repository.get(
            `${baseUrl}/newsletters`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
            console.log("reponse",reponse)
        return reponse;
    }*/
     async getRecords(params) {
         console.log("newsletter Repo");
        const token = localStorage.getItem('token')
        const config ={
            headers: {
                Authorization:
                    `Bearer ${token}` ,
            }};
            console.log("config",config)
        const response = await  axios.get(`${baseUrl}/newsletters`,config)
            .then(response=>response.data).catch(err=>{throw err })
                    console.log("response",response)

            
        return response;

    }




    async getTotalRecords() {

        const reponse = await Repository.get(`${baseUrl}/newsletters/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    } 
/*
    async getOrderById(payload) {
        console.log(`${baseUrl}/orders/${payload}`) ;
        const response = await Repository.get(`${baseUrl}/orders/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;
    }


    async getOrdersCountByDate(){
        const token = localStorage.getItem('token')
        const config = {
            Authorization:
                `Bearer ${token}` ,
        };
        let today = new Date();
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        let dd = String(tomorrow.getDate()).padStart(2, '0');
        let mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = tomorrow.getFullYear();


        const thisDay = yyyy + '-' + mm + '-' + dd;
        const thisMonthFirstDate = `${yyyy}-${mm}-01`
        const response = await Repository.get(`${baseUrl}/orders/?created_at_gte=${thisMonthFirstDate}&created_at_lte=${thisDay}`, {headers: config}) .then(response => {
          return response.data}).catch(error => ({ error: JSON.stringify(error) }));
            return response;


    }
*/


}

export default new OrderRepository();
