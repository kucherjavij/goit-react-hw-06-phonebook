import { combineReducers, createReducer } from "@reduxjs/toolkit"
import actions from "./contacts-actions"

const contactReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => [payload, ...state],
    [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload)
})


const filterReducer = createReducer('', {
[actions.changeFilter]: (_, {payload}) => payload
})

        export default combineReducers({
            contactReducer,
            filterReducer
        })
