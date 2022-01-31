import { nanoid } from 'nanoid'

 const addContact = data => ({
    type: 'app/addContact',
    payload: {
        name: data.name,
        number: data.number,
        id: nanoid()
      }
})

const deleteContact = contactId => ({
    type: 'app/deleteContact',
    payload: contactId
})

const changeFilter = value => ({
    type: 'app/changeFilter',
    payload: value
})


export default {addContact,deleteContact, changeFilter}
