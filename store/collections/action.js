export const actionTypes = {
    GET_COLLECTIONS: 'GET_COLLECTIONS',
    GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',

    GET_COLLECTION: 'GET_COLLECTION',
    GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',

    GET_COLLECTION_BY_CATEGORY: 'GET_COLLECTION_BY_CATEGORY',
    GET_COLLECTION_BY_CATEGORY_SUCCESS: 'GET_COLLECTION_BY_CATEGORY_SUCCESS',
};

export function getCollections(payload) {
    return { type: actionTypes.GET_COLLECTIONS, payload };
}

export function getCollectionsSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}

export function getCollectionCategories(payload) {
    return { type: actionTypes.GET_COLLECTION_BY_CATEGORY, payload };
}

export function getCategoriesSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTION_BY_CATEGORY_SUCCESS,
        payload,
    };
}

export function getCollection(payload) {
    return { type: actionTypes.GET_COLLECTIONS, payload };
}

export function getCollectionSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}
