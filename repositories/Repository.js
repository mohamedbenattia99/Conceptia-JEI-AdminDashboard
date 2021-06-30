import axios from 'axios';
export const isGrapql = true;
const baseDomain = 'http://localhost:1337';
/*const baseDomain = 'http://45.76.97.89:1337';*/
const shopBaseUrl = "http://localhost:3000";

const authorization_prefix = 'Bearer ';
import {notification} from "antd";
export const customHeaders = {
    Accept: 'application/json',

};

export const baseUrl = `${baseDomain}`;
export const shopUrl = `${shopBaseUrl}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});


export async function fetchData(data,url) {
    const token = localStorage.getItem('token')

    const config = {
            Authorization:
                `Bearer ${token}` ,
        };
console.log(data)
    const response = await axios({
        method: 'POST',
        url: `${baseDomain}/${url}`,
        headers: config,
        data:data,
    })
    console.log('response',response)
    return response;
}

export async function updateProduct(id,query,model) {
    const token = localStorage.getItem('token')

    const config = {
        Authorization:
            `Bearer ${token}` ,
    };
    const response = await axios({
        method: 'PUT',
        url: `${baseDomain}/${model}/${id}`,
        headers: config,
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

export async function updateMegaContent(megaContentId,productId) {
    const token = localStorage.getItem('token')
    const config = {
        Authorization:
            `Bearer ${token}` ,
    };
    const prevData = await axios({
        method: 'GET',
        url: `${baseDomain}/mega-items/${megaContentId}`,
        headers: config,

    }).then(result1=> {
        console.log([...result1.data.products, productId])
        const response = axios.put(
            `${baseDomain}/mega-items/${megaContentId}`,
            {products: [...result1.data.products, productId]}, {headers: config}).then(  result=> {
            console.log(result)

            notification.open({
                type :'success',
                message: 'succès !',
                description: 'ajout avec succés a la categorie ',
                duration: 7,
            })
        }).catch(  error=> {
            console.log(error)

            notification.open({
                type :'warning',
                message: 'erreur !',
                description: "erreur a l'ajout a la categorie",
                duration: 7,
            });})
    }).catch(err=> {
        notification.open({
            type :'warning',
            message: 'erreur !',
            description: "erreur a l'ajout a la categorie",
            duration: 7,
        })
         throw err

    })




    return prevData;

}




export async function deleteProduct (id,model) {
    const token = localStorage.getItem('token')
    const config = {
        Authorization:
            `Bearer ${token}` ,
    };
    const response = await axios({
        method: 'DELETE',
        url: `${baseDomain}/products/${id}`,
        headers: config,
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

export async function createCategory(subCategory,categorieData){
    const token = localStorage.getItem('token')

    const config = {
        Authorization:
            `Bearer ${token}` ,
    };

    const options ={
        method: 'POST',
        url: `${baseDomain}/mega-items`,
        headers: config,

    }

   const requests =  subCategory.map(sub=>axios({...options,data:sub}))


    const sub = await  axios.all(requests).then((...responses)=> {
        console.log(responses)
        const subcategories =responses[0].map(response=>response.data.id)


        const rep = axios.post(
            `${baseDomain}/product-categories`,
            {...categorieData,mega_contents:subcategories}, {headers: config}).then(  result=> {
            console.log(result)

            notification.open({
                type :'success',
                message: 'succès !',
                description: 'ajout avec succés de la categorie ',
                duration: 7,
            })
        }).catch(  error=> {
            console.log(error)

            notification.open({
                type :'warning',
                message: 'erreur !',
                description: "erreur a l'ajout de la categorie",
                duration: 7,
            });})
    }).catch(err=> {
        notification.open({
            type :'warning',
            message: 'erreur !',
            description: "erreur a l'ajout de la categorie",
            duration: 7,
        })
        throw err

    })
}


export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');


};

