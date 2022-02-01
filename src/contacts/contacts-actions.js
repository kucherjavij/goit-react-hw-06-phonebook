import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const addContact = createAction('app/addContact', data => 
     ({payload: {
         name: data.name,
         number: data.number,
         id: nanoid()
       }})
)
const deleteContact = createAction('app/deleteContact')
const changeFilter = createAction('app/changeFilter')


export default {addContact,deleteContact, changeFilter}
