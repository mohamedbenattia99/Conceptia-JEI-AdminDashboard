import Repository, { baseUrl, serializeQuery } from './Repository';

class CategoriesRepository {

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
            `${baseUrl}/categories?${serializeQuery(params)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }




    async getTotalRecords() {

        const reponse = await Repository.get(`${baseUrl}/categories/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


}

export default new CategoriesRepository();
