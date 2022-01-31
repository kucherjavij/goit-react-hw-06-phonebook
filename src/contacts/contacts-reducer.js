import { combineReducers } from "@reduxjs/toolkit"

const contactReducer = (state = [], {type,payload}) => {
    switch (type) {
        case 'app/addContact':
         return [payload,...state ]
        case 'app/deleteContact':
            return state.filter(contact => contact.id !== payload)
        default:
            return state
    }
    }



const filterReducer = (state = '', {type,payload}) => {
        switch (type) {
        case 'app/changeFilter':
         return payload
        
        default:
            return state
    }
        }

        export default combineReducers({
            contactReducer,
            filterReducer
        })
