
export const ADD_FEATURE =  'ADD_FEATURE'
export const REMOVE_ADDED_FEATURE = 'REMOVE_ADDED_FEATURE'

export function addFeature(item) {
    return {
        type: ADD_FEATURE,
        payload: item
    };
}

export function removeAddedFeature(item){
    return{
        type: REMOVE_ADDED_FEATURE,
        payload: item
    };
}