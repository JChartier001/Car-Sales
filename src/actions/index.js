
export const ADD_FEATURE =  'ADD_FEATURE'
export const REMOVE_ADDED_FEATURE = 'REMOVE_ADDED_FEATURE'

export function addFeature() {
    return {
        type: ADD_FEATURE
    };
}

export function removeAddedFeature(){
    return{
        type: REMOVE_ADDED_FEATURE
    };
}