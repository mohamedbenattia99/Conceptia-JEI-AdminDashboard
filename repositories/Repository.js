import axios from 'axios';
export const isGrapql = true;
const baseDomain = 'http://localhost:1337';
/*const baseDomain = 'http://45.76.97.89:1337';*/
const shopBaseUrl = "http://localhost:3000";

const authorization_prefix = 'Bearer ';
import {notification} from "antd";
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjI0MDE5NDIxLCJleHAiOjE2MjY2MTE0MjF9.krBrZUPqtNQnhMAkJ2dWpEUf9DOuU_CljGjPPLWhxU0'
export const customHeaders = {
    Accept: 'application/json',
     Authorization: authorization_prefix + token ,
};

export const baseUrl = `${baseDomain}`;
export const shopUrl = `${shopBaseUrl}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});


export async function fetchData(data,url) {
console.log(data)
    const response = await axios({
        method: 'POST',
        url: `${baseDomain}/${url}`,
        headers: customHeaders,
        data:data,
    }).then(  result=> {

        notification.open({
            type :'success',
            message: 'succès !',
            description: 'demande en cours d\'envoie' ,
            duration: 7,

        }



        )
        }).catch(error=> {
        notification.open({
            type :'warning',
            message: 'erreur !',
                description: "erreur à l'envoie du demande",
            duration: 7,
        });})

    return response;
}

export async function updateProduct(id,query,model) {
    const response = await axios({
        method: 'PUT',
        url: `${baseDomain}/${model}/${id}`,
        headers: customHeaders,
        data:query,
    }).then(  result=> {
        console.log(result)

        notification.open({
            type :'success',
            message: 'succès !',
            description: 'succès de la mise à jour du produit',
            duration: 7,
        })
    }).catch(  error=> {
        console.log(error)

        notification.open({
            type :'warning',
            message: 'erreur !',
            description: "erreur à l'envoie du demande",
            duration: 7,
        });})

    return response;

}
export async function deleteProduct (id,model) {
    const response = await axios({
        method: 'DELETE',
        url: `${baseDomain}/products/${id}`,
        headers: customHeaders,
    }).then(  result=> {
        console.log(result)
        notification.open({
            type :'success',
            message: 'succès !',
            description: 'produit supprimé avec succès',
            duration: 7,
        })
    }).catch(  error=> {

        console.log(error)
        notification.open({
            type :'warning',
            message: 'erreur !',
            description: "erreur à l'envoie du demande",
            duration: 7,
        });})

    return response;
}



export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');


};

